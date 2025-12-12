import { type PublicClient, type WalletClient } from 'viem';
import { readContract, simulateContract, writeContract } from 'viem/actions';
import { CONTRACTS } from '../constants/contracts.js';
import { STORAGE_REGISTRY_ABI } from '../constants/abis.js';

export const storageRegistry = {
  read: {
    async rentedUnits(client: PublicClient, fid: bigint): Promise<bigint> {
      return readContract(client, {
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'rentedUnits',
        args: [fid],
      });
    },

    async price(client: PublicClient, units: bigint): Promise<bigint> {
      return readContract(client, {
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'price',
        args: [units],
      });
    },

    async deprecationTimestamp(client: PublicClient): Promise<bigint> {
      return readContract(client, {
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
      const { request } = await simulateContract(client, {
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'rent',
        args: [fid, units],
        value,
      });
      return writeContract(client, request);
    },

    async batchRent(
      client: WalletClient,
      fids: bigint[],
      units: bigint[],
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'batchRent',
        args: [fids, units],
        value,
      });
      return writeContract(client, request);
    },

    async credit(
      client: WalletClient,
      fid: bigint,
      units: bigint
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: STORAGE_REGISTRY_ABI,
        functionName: 'credit',
        args: [fid, units],
      });
      return writeContract(client, request);
    },
  },
};

