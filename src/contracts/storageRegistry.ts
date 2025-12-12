import { type PublicClient, type WalletClient } from 'viem';
import { CONTRACTS } from '../constants/contracts.js';
import { STORAGE_REGISTRY_ABI } from '../constants/abis.js';

export const storageRegistry = {
  read: {
    async rentedUnits(client: PublicClient, fid: bigint): Promise<bigint> {
      return client.readContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'rentedUnits',
        args: [fid],
      });
    },

    async price(client: PublicClient, units: bigint): Promise<bigint> {
      return client.readContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'price',
        args: [units],
      });
    },

    async deprecationTimestamp(client: PublicClient): Promise<bigint> {
      return client.readContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'deprecationTimestamp',
      });
    },
  },

  write: {
    async rent(
      client: WalletClient,
      fid: bigint,
      units: bigint,
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'rent',
        args: [fid, units],
        value,
      });
      return (client as any).writeContract(request);
    },

    async batchRent(
      client: WalletClient,
      fids: bigint[],
      units: bigint[],
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'batchRent',
        args: [fids, units],
        value,
      });
      return (client as any).writeContract(request);
    },

    async credit(
      client: WalletClient,
      fid: bigint,
      units: bigint
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'credit',
        args: [fid, units],
      });
      return (client as any).writeContract(request);
    },
  },
};

