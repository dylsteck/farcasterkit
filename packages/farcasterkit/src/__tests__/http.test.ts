import { createHttpClient, getCastsByFid, getUserDataByFid, getFidsByAddress } from '../http';

describe('HTTP Client', () => {
  const client = createHttpClient('https://snap.farcaster.xyz:3381');

  it('should fetch casts by fid', async () => {
    const result = await getCastsByFid(client, 2);
    expect(result).toHaveProperty('messages');
    expect(Array.isArray(result.messages)).toBe(true);
  }, 10000);

  it('should fetch user data by fid', async () => {
    const result = await getUserDataByFid(client, 2);
    expect(result).toHaveProperty('messages');
    expect(Array.isArray(result.messages)).toBe(true);
  }, 10000);

  it('should fetch fids by address', async () => {
    const result = await getFidsByAddress(client, '0x4114e33eb831858649ea3702e1c9a2db3f626446');
    expect(result).toHaveProperty('fids');
    expect(Array.isArray(result.fids)).toBe(true);
  }, 10000);
});



