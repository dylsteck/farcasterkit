import { createPublicClient, http } from 'viem';
import { optimism } from 'viem/chains';
import { idRegistry, storageRegistry } from '../contracts';

describe('Contract Integration', () => {
  const client = createPublicClient({
    chain: optimism,
    transport: http(),
  });

  it('should read idOf from IdRegistry', async () => {
    const fid = await idRegistry.read.idOf(client, '0x4114e33eb831858649ea3702e1c9a2db3f626446');
    expect(typeof fid).toBe('bigint');
    expect(fid).toBeGreaterThan(0n);
  }, 10000);

  it('should read rentedUnits from StorageRegistry', async () => {
    const units = await storageRegistry.read.rentedUnits(client, 2n);
    expect(typeof units).toBe('bigint');
  }, 10000);

  it('should read price from StorageRegistry', async () => {
    const price = await storageRegistry.read.price(client, 1n);
    expect(typeof price).toBe('bigint');
    expect(price).toBeGreaterThan(0n);
  }, 10000);
});



