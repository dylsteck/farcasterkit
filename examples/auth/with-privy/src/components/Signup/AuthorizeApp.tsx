import React, { useEffect, useState } from 'react';
import { useAccount, useSignTypedData } from 'wagmi';
import { toast } from 'sonner';
import { useFarcasterKit } from '../../providers/FarcasterKitProvider';

export default function AuthorizeApp({ onComplete }: { onComplete: () => void }) {
  const { fid } = useFarcasterKit();
  const { address, isConnected } = useAccount();

  const [isSigning, setIsSigning] = useState(false);

  const EIP712Domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" }
  ];

  const AddType = [
    { name: "owner", type: "address" },
    { name: "keyType", type: "uint32" },
    { name: "key", type: "bytes" },
    { name: "metadataType", type: "uint8" },
    { name: "metadata", type: "bytes" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" }
  ];

  const domain: any = {
    name: "Farcaster KeyGateway",
    version: "1",
    chainId: 10,
    verifyingContract: "0x00000000fc56947c7e7183f8ca4b62398caadf0b"
  };

  const message = {
    owner: "0x7e37c3a9349227b60503ddb1574a76d10c6bc48e",
    keyType: 1,
    key: "0xde9451efac3beabe8c369fd138249c72db654aef3dc61ff9b0b07c79fa410229",
    metadataType: 1,
    metadata: "0x00000000...",
    nonce: "0",
    deadline: 1700804114
  };

  const { signTypedDataAsync } = useSignTypedData();

  const handleSign = async () => {
    if (!isConnected) {
      toast.error('Wallet not connected');
      return;
    }

    setIsSigning(true);

    try {
      const signature = await signTypedDataAsync({
        domain,
        types: { EIP712Domain, Add: AddType },
        message,
        primaryType: 'Add'
      });

      toast.success('Signature successful');
      console.log('Signature:', signature);
      onComplete();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error signing message: ${error.message}`);
      } else {
        toast.error('An unknown error occurred');
      }
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <>
    <p>Clicking the button below wil authorize this app as a signer</p>
    <button
      disabled={!isConnected || isSigning}
      onClick={handleSign}
      className="mt-5 w-28 inline-flex justify-center items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-500"
    >
      Sign Message
    </button>
    </>
  );
}
