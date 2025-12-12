import { idGateway, keyGateway, bundler } from '../contracts';
import { createMockWalletClient } from '../../jest.setup';
import { CONTRACTS } from '../constants/contracts';

describe('Gateway Write Helpers', () => {
  describe('idGateway', () => {
    it('should register with correct params', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.ID_GATEWAY },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const txHash = await idGateway.write.register(
        mockWalletClient,
        '0xrecovery',
        5n,
        1000000n
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.ID_GATEWAY,
        abi: expect.any(Array),
        functionName: 'register',
        args: ['0xrecovery', 5n],
        value: 1000000n,
      });
      expect((mockWalletClient as any).writeContract).toHaveBeenCalled();
    });
  });

  describe('keyGateway', () => {
    it('should add key with correct params', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.KEY_GATEWAY },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const txHash = await keyGateway.write.add(
        mockWalletClient,
        1,
        '0xkey',
        1,
        '0xmetadata'
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.KEY_GATEWAY,
        abi: expect.any(Array),
        functionName: 'add',
        args: [1, '0xkey', 1, '0xmetadata'],
      });
    });
  });

  describe('bundler', () => {
    it('should register with bundler params', async () => {
      const mockWalletClient = createMockWalletClient();
      ((mockWalletClient as any).simulateContract as jest.Mock).mockResolvedValue({
        request: { to: CONTRACTS.BUNDLER },
      });
      ((mockWalletClient as any).writeContract as jest.Mock).mockResolvedValue('0xtxhash');

      const registerParams = {
        to: '0xto' as `0x${string}`,
        recovery: '0xrecovery' as `0x${string}`,
        sig: '0xsig' as `0x${string}`,
        deadline: 9999999n,
      };

      const signerParams = [
        {
          keyType: 1,
          key: '0xkey' as `0x${string}`,
          metadataType: 1,
          metadata: '0xmetadata' as `0x${string}`,
          sig: '0xsig' as `0x${string}`,
          deadline: 9999999n,
        },
      ];

      const txHash = await bundler.write.register(
        mockWalletClient,
        registerParams,
        signerParams,
        5n,
        1000000n
      );

      expect(txHash).toBe('0xtxhash');
      expect((mockWalletClient as any).simulateContract).toHaveBeenCalledWith({
        address: CONTRACTS.BUNDLER,
        abi: expect.any(Array),
        functionName: 'register',
        args: [registerParams, signerParams, 5n],
        value: 1000000n,
      });
      expect((mockWalletClient as any).writeContract).toHaveBeenCalled();
    });
  });
});

