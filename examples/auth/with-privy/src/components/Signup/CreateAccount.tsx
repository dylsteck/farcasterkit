import React, { useState, useEffect, useCallback } from 'react';
import { usePrepareContractWrite, useContractWrite, useAccount, useWaitForTransaction, useSignTypedData, useNetwork } from 'wagmi';
import { parseUnits, formatUnits, Contract } from 'ethers';
import { useFarcasterKit } from "@/providers/FarcasterKitProvider";
import { BundlerABI } from '@/abi/BundlerABI';

// Bundler contract call 
const contractAddress = '0x00000000fc94856F3967b047325F88d47Bc225d0';

interface CreateAccountProps {
  onComplete: () => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onComplete }) => {
  const { signer, recoveryAddress } = useFarcasterKit();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const [storageUnits, setStorageUnits] = useState('0');
  const [estimatedGas, setEstimatedGas] = useState('');
  const [isInsufficientFunds, setIsInsufficientFunds] = useState(false);
  const [isWriteLoading, setIsWriteLoading] = useState(false);
  const [signature, setSignature] = useState('');

  // Setting deadline to one year from now
  const deadline = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;

  const { signTypedData } = useSignTypedData();

  // Define the data structure to be signed as per your contract's requirements
  const dataToSign = {
    domain: {
      name: 'YourContractName',
      version: '1',
      chainId: chain?.id,
      verifyingContract: contractAddress,
    },
    types: {
      Registration: [
        { name: 'to', type: 'address' },
        { name: 'recovery', type: 'address' },
        { name: 'deadline', type: 'uint256' },
      ],
    },
    value: {
      to: address,
      recovery: recoveryAddress,
      deadline: deadline.toString(),
    },
  };

  useEffect(() => {
    if (isConnected && address) {
      signTypedData({
        domain: dataToSign.domain,
        types: dataToSign.types,
        value: dataToSign.value,
      }).then((signature) => {
        setSignature(signature);
      }).catch(console.error);
    }
  }, [signTypedData, address, isConnected, dataToSign]);

  const prepareRegistration = useCallback(() => {
    return {
      to: address,
      recovery: recoveryAddress,
      deadline: deadline.toString(),
      sig: signature
    };
  }, [address, recoveryAddress, deadline, signature]);

  const contract = new Contract(contractAddress, BundlerABI);

  const { config, error: prepareError } = usePrepareContractWrite({
    address: contractAddress,
    abi: BundlerABI,
    functionName: 'register',
    args: [prepareRegistration(), [signer], parseUnits(storageUnits, 'ether')],
  });

  const { write: registerWrite, data: txData } = useContractWrite(config);

  useEffect(() => {
    if (isConnected && address && contract.provider) {
      contract.estimateGas.register(prepareRegistration(), [signer], parseUnits(storageUnits, 'ether'))
        .then(estimatedGasLimit => {
          return estimatedGasLimit.mul(contract.provider.getGasPrice());
        })
        .then(estimatedGasCost => {
          setEstimatedGas(formatUnits(estimatedGasCost, 'ether'));
        })
        .catch(console.error);
    }
  }, [address, isConnected, contract, prepareRegistration, signer, storageUnits]);

  const { status: waitStatus } = useWaitForTransaction({
    hash: txData?.hash,
  });

  useEffect(() => {
    if (waitStatus === 'success') {
      onComplete();
    }
  }, [waitStatus, onComplete]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isInsufficientFunds && registerWrite && signature) {
      setIsWriteLoading(true);
      registerWrite();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={storageUnits}
          onChange={(e) => setStorageUnits(e.target.value)}
          placeholder="Storage Units"
        />
        <button type="submit" disabled={isWriteLoading}>Register</button>
      </form>

      {prepareError && <p>Error: {prepareError.message}</p>}
      {estimatedGas && <p>Estimated Gas: {estimatedGas} ETH</p>}
      {isInsufficientFunds && <p style={{ color: 'red' }}>Insufficient Funds.</p>}
      {waitStatus === 'success' && <p>Transaction Successful!</p>}
    </div>
  );
};

export default CreateAccount;