import React, { useRef } from 'react';
import { useAccount, useSignTypedData } from 'wagmi';
import { toast } from 'sonner';
import { useFarcasterKit } from '@/providers/FarcasterKitProvider';

interface SetRecoveryAddressProps {
    authenticatedAddress: `0x${string}`;
    onComplete: () => void;
}

function Confirm({ onComplete }: SetRecoveryAddressProps) {
    const { address } = useAccount();
    const { recoveryAddress } = useFarcasterKit();
    const { signTypedDataAsync } = useSignTypedData();

    const domain: any = {
        name: 'Farcaster IdGateway',
        version: '1',
        chainId: 10,
        verifyingContract: '0x00000000fc25870c6ed6b6c7e41fb078b7656f69'
    };

    const types = {
        EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' }
        ],
        Register: [
            { name: 'to', type: 'address' },
            { name: 'recovery', type: 'address' }
        ]
    };

    const message = {
        to: address,
        recovery: recoveryAddress
    };

    const generateSignature = async () => {
        if (!address) {
            toast.error("Wallet not connected");
            return;
        }

        try {
            const signature = await signTypedDataAsync({
              domain,
              types,
              message,
              primaryType: 'Register'
            });
            toast.success("Signature generated successfully");
            onComplete();
        } catch (error) {
            if (error instanceof Error) {
                toast.error("Error generating signature", { description: error.message });
            } else {
                toast.error("An unknown error occurred");
            }
        }
    };

    return (
        <button 
            className="pl-2 pb-2 font-medium text-black" 
            onClick={generateSignature}
        >
            Generate Signature
        </button>
    );
}

export default function SetRecoveryAddress({ authenticatedAddress, onComplete }: SetRecoveryAddressProps) {
    const { recoveryAddress, setRecoveryAddress } = useFarcasterKit();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecoveryAddress(event.target.value as `0x${string}`);
    };

    return (
        <div>
            <p className="pl-2">Enter your recovery address below</p>
            <input
                type="text"
                value={recoveryAddress}
                placeholder="Enter recovery address"
                onChange={handleOnChange}
                ref={inputRef}
                className="bg-transparent text-black border-none w-full overflow-x-scroll p-2"
            />
            <Confirm authenticatedAddress={authenticatedAddress} onComplete={onComplete} />
        </div>
    );
}