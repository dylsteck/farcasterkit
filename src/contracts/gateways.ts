import { type Address, type WalletClient, simulateContract, writeContract } from 'viem';
import { CONTRACTS } from '../constants/contracts.js';
import { ID_GATEWAY_ABI, KEY_GATEWAY_ABI, BUNDLER_ABI } from '../constants/abis.js';
import type { RegisterParams, SignerParams } from '../types/index.js';

export const idGateway = {
  write: {
    async register(
      client: WalletClient,
      recovery: Address,
      extraStorage: bigint,
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.ID_GATEWAY,
        abi: ID_GATEWAY_ABI,
        functionName: 'register',
        args: [recovery, extraStorage],
        value,
      });
      return writeContract(client, request);
    },
  },
};

export const keyGateway = {
  write: {
    async add(
      client: WalletClient,
      keyType: number,
      key: `0x${string}`,
      metadataType: number,
      metadata: `0x${string}`
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.KEY_GATEWAY,
        abi: KEY_GATEWAY_ABI,
        functionName: 'add',
        args: [keyType, key, metadataType, metadata],
      });
      return writeContract(client, request);
    },
  },
};

export const bundler = {
  write: {
    async register(
      client: WalletClient,
      registerParams: RegisterParams,
      signerParams: SignerParams[],
      extraStorage: bigint,
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await simulateContract(client, {
        address: CONTRACTS.BUNDLER,
        abi: BUNDLER_ABI,
        functionName: 'register',
        args: [registerParams, signerParams, extraStorage],
        value,
      });
      return writeContract(client, request);
    },
  },
};

