import { type Address, type PublicClient, type WalletClient } from 'viem';
import { CONTRACTS } from '../constants/contracts.js';
import { ID_REGISTRY_ABI } from '../constants/abis.js';

export const idRegistry = {
  read: {
    async idOf(client: PublicClient, owner: Address): Promise<bigint> {
      return client.readContract({
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'idOf',
        args: [owner],
      });
    },

    async custodyOf(client: PublicClient, fid: bigint): Promise<Address> {
      return client.readContract({
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'custodyOf',
        args: [fid],
      });
    },

    async recoveryOf(client: PublicClient, fid: bigint): Promise<Address> {
      return client.readContract({
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'recoveryOf',
        args: [fid],
      });
    },
  },

  write: {
    async transfer(
      client: WalletClient,
      to: Address,
      deadline: bigint,
      sig: `0x${string}`
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'transfer',
        args: [to, deadline, sig],
      });
      return (client as any).writeContract(request);
    },

    async changeRecovery(
      client: WalletClient,
      recovery: Address
    ): Promise<`0x${string}`> {
      const { request } = await (client as any).simulateContract({
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'changeRecovery',
        args: [recovery],
      });
      return (client as any).writeContract(request);
    },
  },
};

