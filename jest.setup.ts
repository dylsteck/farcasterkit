import type { PublicClient, WalletClient } from 'viem';

global.fetch = jest.fn();

export function createMockPublicClient(): PublicClient {
  return {
    readContract: jest.fn(),
  } as any as PublicClient;
}

export function createMockWalletClient(): WalletClient {
  return {
    simulateContract: jest.fn(),
    writeContract: jest.fn(),
  } as any as WalletClient;
}

export function mockFetch(data: any, status = 200) {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    json: async () => data,
  });
}

