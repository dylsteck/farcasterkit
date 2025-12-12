import { FarcasterKit } from '../FarcasterKit';
import { mockFetch, createMockPublicClient } from '../../jest.setup';

describe('FarcasterKit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create instance with default snapchain url', () => {
    const fc = new FarcasterKit();
    expect(fc).toBeInstanceOf(FarcasterKit);
    expect(fc.snapchainUrl).toBe('https://snap.farcaster.xyz:3381');
  });

  it('should create instance with custom snapchain url', () => {
    const fc = new FarcasterKit('https://custom.url');
    expect(fc.snapchainUrl).toBe('https://custom.url');
  });

  it('should expose contract helpers', () => {
    const fc = new FarcasterKit();
    expect(fc.idRegistry).toBeDefined();
    expect(fc.keyRegistry).toBeDefined();
    expect(fc.storageRegistry).toBeDefined();
    expect(fc.idGateway).toBeDefined();
    expect(fc.keyGateway).toBeDefined();
    expect(fc.bundler).toBeDefined();
  });

  describe('HTTP methods', () => {
    it('should fetch hub info', async () => {
      const mockInfo = {
        version: '1.0.0',
        isSyncing: false,
        nickname: 'test',
        rootHash: '0x',
        dbStats: { numMessages: 100, numFidEvents: 10, numFnameEvents: 5 },
        peerId: 'test',
        hubOperatorFid: 1,
      };
      mockFetch(mockInfo);

      const fc = new FarcasterKit();
      const info = await fc.getInfo();

      expect(info).toEqual(mockInfo);
    });

    it('should fetch casts by fid', async () => {
      const mockCasts = { messages: [] };
      mockFetch(mockCasts);

      const fc = new FarcasterKit();
      const casts = await fc.getCastsByFid(2);

      expect(casts).toEqual(mockCasts);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/v1/castsByFid?fid=2')
      );
    });

    it('should fetch user data by fid', async () => {
      const mockUserData = { messages: [] };
      mockFetch(mockUserData);

      const fc = new FarcasterKit();
      const userData = await fc.getUserDataByFid(2);

      expect(userData).toEqual(mockUserData);
    });

    it('should fetch fids by address', async () => {
      const mockFids = { fids: [2] };
      mockFetch(mockFids);

      const fc = new FarcasterKit();
      const fids = await fc.getFidsByAddress('0x4114e33eb831858649ea3702e1c9a2db3f626446');

      expect(fids).toEqual(mockFids);
    });
  });

  describe('Contract methods', () => {
    it('should call idRegistry.read.idOf for getFid', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue(2n);

      const fc = new FarcasterKit();
      fc.viemClient = mockClient;

      const fid = await fc.getFid('0x4114e33eb831858649ea3702e1c9a2db3f626446');

      expect(fid).toBe(2n);
      expect(mockClient.readContract).toHaveBeenCalledWith(
        expect.objectContaining({
          functionName: 'idOf',
          args: ['0x4114e33eb831858649ea3702e1c9a2db3f626446'],
        })
      );
    });

    it('should call storageRegistry.read.rentedUnits for getStorage', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue(5n);

      const fc = new FarcasterKit();
      fc.viemClient = mockClient;

      const storage = await fc.getStorage(2);

      expect(storage).toBe(5n);
      expect(mockClient.readContract).toHaveBeenCalledWith(
        expect.objectContaining({
          functionName: 'rentedUnits',
          args: [2n],
        })
      );
    });
  });
});

