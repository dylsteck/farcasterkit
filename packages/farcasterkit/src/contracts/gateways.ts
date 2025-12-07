import { type WalletClient, type Address } from 'viem';
import { CONTRACTS } from '../constants/contracts';
import { ID_GATEWAY_ABI, KEY_GATEWAY_ABI, BUNDLER_ABI } from '../constants/abis';
import type { RegisterParams, SignerParams } from '../types';

export const idGateway = {
  write: {
    async register(
      client: WalletClient,
      recovery: Address,
      extraStorage: bigint,
      value: bigint
    ): Promise<`0x${string}`> {
      const { request } = await client.simulateContract({
        address: CONTRACTS.ID_GATEWAY,
        abi: ID_GATEWAY_ABI,
        functionName: 'register',
        args: [recovery, extraStorage],
        value,
      });
      return client.writeContract(request);
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
      const { request } = await client.simulateContract({
        address: CONTRACTS.KEY_GATEWAY,
        abi: KEY_GATEWAY_ABI,
        functionName: 'add',
        args: [keyType, key, metadataType, metadata],
      });
      return client.writeContract(request);
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
      const { request } = await client.simulateContract({
        address: CONTRACTS.BUNDLER,
        abi: BUNDLER_ABI,
        functionName: 'register',
        args: [registerParams, signerParams, extraStorage],
        value,
      });
      return client.writeContract(request);
    },
  },
};



