"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { useAccount, useContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import { ethers, formatUnits, parseUnits } from 'ethers';
import { BundlerABI } from '@/abi/BundlerABI';

const contractAddress = '0x00000000FC04c910A0b5feA33b03E0447AD0B0aA';

const CreateAccount = ({ onComplete }: { onComplete: () => void }) => {
  const { address, isConnected } = useAccount();
  const [storageUnits, setStorageUnits] = useState('0');
  const [isWriteLoading, setIsWriteLoading] = useState(false);

  const { data: priceData } = useContractRead({
    address: contractAddress,
    abi: BundlerABI,
    functionName: 'price',
    args: [0],
  });

  useEffect(() => {
    if (priceData) {
      setStorageUnits(formatUnits(priceData, 'ether'));
    }
  }, [priceData]);

  const prepareRegistrationParams = useCallback(() => {
    const deadline = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;
    return [
      { to: address, recovery: address, deadline, signature }, // Assuming recovery address is the same as the user's address
      [], // Assuming no signerParams
      parseUnits(storageUnits || '0', 'ether')
    ];
  }, [address, storageUnits]);

  const { write, error: writeError } = useContractWrite({
    address: contractAddress,
    abi: BundlerABI,
    functionName: 'register',
    args: prepareRegistrationParams(),
  });

  const handleRegister = async () => {
    if (!isConnected || !address) {
      console.error("Wallet not connected");
      return;
    }
    setIsWriteLoading(true);
    try {
      await write();
    } finally {
      setIsWriteLoading(false);
    }
  };

  const { status: waitStatus } = useWaitForTransaction({
    hash: write?.data?.hash,
  });

  useEffect(() => {
    if (waitStatus === 'success') {
      onComplete();
    }
  }, [waitStatus, onComplete]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={storageUnits}
          onChange={(e) => setStorageUnits(e.target.value)}
          placeholder="Storage Units"
        />
        <button onClick={handleRegister} disabled={isWriteLoading}>Register</button>
      </form>
      {writeError && <p>Error: {writeError.message}</p>}
      <p>Transaction Status: {waitStatus}</p>
    </div>
  );
};

export default CreateAccount;