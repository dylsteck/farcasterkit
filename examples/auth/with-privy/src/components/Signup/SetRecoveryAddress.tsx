import { IdRegistryABI } from "@/abi/IdRegistryABI";
import { useFarcasterKit } from "@/providers/FarcasterKitProvider";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

interface SetRecoveryAddressProps{
    authenticatedAddress: `0x${string}`;
    onComplete: () => void;
}
// Registers a FID and sets its recovery address
export default function SetRecoveryAddress({ authenticatedAddress, onComplete }: SetRecoveryAddressProps) {
    const { fid, setFid, recoveryAddress: address, setRecoveryAddress: setAddress } = useFarcasterKit();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value as `0x${string}`);
    };

    const { config, isError, error } = usePrepareContractWrite({
      address: '0x00000000FcAf86937e41bA038B4fA40BAA4B780A', // mainnet
      abi: IdRegistryABI,
      functionName: 'register',
      args: [address],
      enabled: Boolean(address),
    });
    const { data: registerFidTxHash, write } = useContractWrite(config);
    const { data: txFid, isLoading, isSuccess: isSuccessTx } = useWaitForTransaction({
        hash: registerFidTxHash?.hash,
    })

    const registerFid = async () => {
    if (isError) {
      toast.error("Error registering FID", { description: error?.message })
    } else {
      write?.()
    }
  }

  useEffect(() => {
    if(authenticatedAddress && address === '0x'){
      setAddress(authenticatedAddress);
    }
    if (isSuccessTx && fid === 0) {
      const newFid = parseInt(txFid?.logs[0].topics[2] as string, 16)
      setFid(newFid)
      toast.success(`FID ${newFid} registered!`)
      onComplete()
    }
  }, [fid, isSuccessTx, setFid, txFid?.logs, onComplete, authenticatedAddress])

  useEffect(() => {
    if (!!registerFidTxHash) {
      alert(`View on Optimism: https://optimistic.etherscan.io/tx/${registerFidTxHash.hash}`)
      //setRegisterFidTxHash(registerFidTxHash.hash)
    }
  }, [registerFidTxHash])

    return (
        <div>
            <input
                type="text"
                value={address}
                placeholder={address}
                onChange={handleOnChange}
                ref={inputRef}
                className="bg-transparent text-black border-none w-[100%] overflow-x-scroll p-2"
            />
            <button className="pl-2 pb-2 font-medium text-white" onClick={registerFid}>Confirm</button>
        </div>
    );
}