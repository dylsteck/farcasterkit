import { idRegistry, storageRegistry, keyRegistry } from '../contracts';
import { createMockPublicClient, createMockWalletClient } from '../../jest.setup';
import { CONTRACTS } from '../constants/contracts';

describe('Contract Helpers', () => {
  describe('idRegistry reads', () => {
    it('should read idOf', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue(2n);

      const fid = await idRegistry.read.idOf(mockClient, '0x4114e33eb831858649ea3702e1c9a2db3f626446');

      expect(fid).toBe(2n);
      expect(mockClient.readContract).toHaveBeenCalledWith({
        address: CONTRACTS.ID_REGISTRY,
        abi: expect.any(Array),
        functionName: 'idOf',
        args: ['0x4114e33eb831858649ea3702e1c9a2db3f626446'],
      });
    });

    it('should read custodyOf', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue('0xtest');

      const custody = await idRegistry.read.custodyOf(mockClient, 2n);

      expect(custody).toBe('0xtest');
      expect(mockClient.readContract).toHaveBeenCalledWith({
        address: CONTRACTS.ID_REGISTRY,
        abi: expect.any(Array),
        functionName: 'custodyOf',
        args: [2n],
      });
    });
  });

  describe('storageRegistry reads', () => {
    it('should read rentedUnits', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue(5n);

      const units = await storageRegistry.read.rentedUnits(mockClient, 2n);

      expect(units).toBe(5n);
      expect(mockClient.readContract).toHaveBeenCalledWith({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: expect.any(Array),
        functionName: 'rentedUnits',
        args: [2n],
      });
    });

    it('should read price', async () => {
      const mockClient = createMockPublicClient();
      (mockClient.readContract as jest.Mock).mockResolvedValue(1000000n);

      const price = await storageRegistry.read.price(mockClient, 1n);

      expect(price).toBe(1000000n);
      expect(mockClient.readContract).toHaveBeenCalledWith({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: expect.any(Array),
        functionName: 'price',
        args: [1n],
      });
    });
  });

  describe('contract writes', () => {
    it('should simulate and write transfer', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.ID_REGISTRY },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const txHash = await idRegistry.write.transfer(
        mockWalletClient,
        '0xrecipient',
        BigInt(Date.now()),
        '0xsig'
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.ID_REGISTRY,
        abi: expect.any(Array),
        functionName: 'transfer',
        args: ['0xrecipient', expect.any(BigInt), '0xsig'],
      });
      expect((mockWalletClient as any).writeContract).toHaveBeenCalled();
    });

    it('should simulate and write storageRegistry rent', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.STORAGE_REGISTRY },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const txHash = await storageRegistry.write.rent(
        mockWalletClient,
        2n,
        5n,
        1000000n
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.STORAGE_REGISTRY,
        abi: expect.any(Array),
        functionName: 'rent',
        args: [2n, 5n],
        value: 1000000n,
      });
    });

    it('should simulate and write keyRegistry add', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.KEY_REGISTRY },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const txHash = await keyRegistry.write.add(
        mockWalletClient,
        1,
        '0xkey',
        1,
        '0xmetadata'
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.KEY_REGISTRY,
        abi: expect.any(Array),
        functionName: 'add',
        args: [1, '0xkey', 1, '0xmetadata'],
      });
    });
  });
});

