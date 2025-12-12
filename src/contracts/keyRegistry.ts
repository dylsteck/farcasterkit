import { type PublicClient, type WalletClient } from 'viem';
import { CONTRACTS } from '../constants/contracts.js';
import { KEY_REGISTRY_ABI } from '../constants/abis.js';
import type { KeyData } from '../types/index.js';

export const keyRegistry = {
  read: {
    async keys(
      client: PublicClient,
      fid: bigint,
      key: `0x${string}`
    ): Promise<number> {
      return client.readContract({
        address: CONTRACTS.KEY_REGISTRY,
        abi: KEY_REGISTRY_ABI,
        functionName: 'keys',
        args: [fid, key],
      });
    },

    async keyDataOf(
      client: PublicClient,
      fid: bigint,
      key: `0x${string}`
    ): Promise<KeyData> {
      return client.readContract({
        address: CONTRACTS.KEY_REGISTRY,
        abi: KEY_REGISTRY_ABI,
        functionName: 'keyDataOf',
        args: [fid, key],
      });
    },

    async keysOf(
      client: PublicClient,
      fid: bigint,
      state: number,
      startIdx: bigint,
      batchSize: bigint
    ): Promise<readonly `0x${string}`[]> {
      return client.readContract({
        address: CONTRACTS.KEY_REGISTRY,
        abi: KEY_REGISTRY_ABI,
        functionName: 'keysOf',
        args: [fid, state, startIdx, batchSize],
      });
    },
  },

  write: {
    async add(
      client: WalletClient,
      keyType: number,
      key: `0x${string}`,
      metadataType: number,
      metadata: `0x${string}`
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.KEY_REGISTRY,
        abi: KEY_REGISTRY_ABI,
        functionName: 'add',
        args: [keyType, key, metadataType, metadata],
      });
      return (client as any).writeContract(request);
    },

    async remove(
      client: WalletClient,
      key: `0x${string}`
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.KEY_REGISTRY,
        abi: KEY_REGISTRY_ABI,
        functionName: 'remove',
        args: [key],
      });
      return (client as any).writeContract(request);
    },
  },
};

