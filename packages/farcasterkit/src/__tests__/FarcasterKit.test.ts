import { FarcasterKit } from '../FarcasterKit';

describe('FarcasterKit', () => {
  const fc = new FarcasterKit('https://snap.farcaster.xyz:3381');

  it('should create instance with default snapchain url', () => {
    expect(fc).toBeInstanceOf(FarcasterKit);
    expect(fc.snapchainUrl).toBe('https://snap.farcaster.xyz:3381');
  });

  it('should fetch hub info', async () => {
    const info = await fc.getInfo();
    expect(info).toHaveProperty('version');
    expect(info).toHaveProperty('isSyncing');
  }, 10000);

  it('should fetch casts by fid', async () => {
    const casts = await fc.getCastsByFid(2);
    expect(casts).toHaveProperty('messages');
    expect(Array.isArray(casts.messages)).toBe(true);
  }, 10000);

  it('should fetch fid from contract', async () => {
    const fid = await fc.getFid('0x4114e33eb831858649ea3702e1c9a2db3f626446');
    expect(typeof fid).toBe('bigint');
    expect(fid).toBeGreaterThan(0n);
  }, 10000);

  it('should fetch storage from contract', async () => {
    const storage = await fc.getStorage(2);
    expect(typeof storage).toBe('bigint');
  }, 10000);
});



