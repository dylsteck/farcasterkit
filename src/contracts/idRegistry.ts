import { type Address, type PublicClient, type WalletClient } from 'viem';
import { readContract, simulateContract, writeContract } from 'viem/actions';
import { CONTRACTS } from '../constants/contracts.js';
import { ID_REGISTRY_ABI } from '../constants/abis.js';

export const idRegistry = {
  read: {
    async idOf(client: PublicClient, owner: Address): Promise<bigint> {
      return readContract(client, {
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'idOf',
        args: [owner],
      });
    },

    async custodyOf(client: PublicClient, fid: bigint): Promise<Address> {
      return readContract(client, {
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'custodyOf',
        args: [fid],
      });
    },

    async recoveryOf(client: PublicClient, fid: bigint): Promise<Address> {
      return readContract(client, {
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
      const { request } = await simulateContract(client, {
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'transfer',
        args: [to, deadline, sig],
      });
      return writeContract(client, request);
    },

    async changeRecovery(
      client: WalletClient,
      recovery: Address
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.ID_REGISTRY,
        abi: ID_REGISTRY_ABI,
        functionName: 'changeRecovery',
        args: [recovery],
      });
      return writeContract(client, request);
    },
  },
};

