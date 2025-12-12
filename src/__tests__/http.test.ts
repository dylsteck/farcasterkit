import { createHttpClient, getCastsByFid, getUserDataByFid, getFidsByAddress } from '../http';
import { mockFetch } from '../../jest.setup';

describe('HTTP Client', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCastsByFid', () => {
    it('should fetch casts by fid', async () => {
      const mockResponse = {
        messages: [
          {
            data: { fid: 2, type: 'CAST_ADD', timestamp: 1234567890 },
            hash: '0xtest',
          },
        ],
      };
      mockFetch(mockResponse);

      const client = createHttpClient('https://snap.farcaster.xyz:3381');
      const result = await getCastsByFid(client, 2);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/v1/castsByFid?fid=2')
      );
    });

    it('should include pagination options', async () => {
      mockFetch({ messages: [] });

      const client = createHttpClient('https://snap.farcaster.xyz:3381');
      await getCastsByFid(client, 2, { pageSize: 10, reverse: true });

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('pageSize=10')
      );
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('reverse=true')
      );
    });
  });

  describe('getUserDataByFid', () => {
    it('should fetch user data by fid', async () => {
      const mockResponse = {
        messages: [
          {
            data: { fid: 2, type: 'USER_DATA_ADD', timestamp: 1234567890 },
            hash: '0xtest',
          },
        ],
      };
      mockFetch(mockResponse);

      const client = createHttpClient('https://snap.farcaster.xyz:3381');
      const result = await getUserDataByFid(client, 2);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/v1/userDataByFid?fid=2')
      );
    });
  });

  describe('getFidsByAddress', () => {
    it('should fetch fids by address', async () => {
      const mockResponse = { fids: [2, 3, 4] };
      mockFetch(mockResponse);

      const client = createHttpClient('https://snap.farcaster.xyz:3381');
      const result = await getFidsByAddress(client, '0x4114e33eb831858649ea3702e1c9a2db3f626446');

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/v1/fidsByAddress?address=0x4114e33eb831858649ea3702e1c9a2db3f626446')
      );
    });
  });

  describe('error handling', () => {
    it('should throw error on non-ok response', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      const client = createHttpClient('https://snap.farcaster.xyz:3381');
      await expect(getCastsByFid(client, 999999)).rejects.toThrow('HTTP 404: Not Found');
    });
  });
});

