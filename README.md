# Farcaster Kit

Typesafe TypeScript library for interacting with [Farcaster](https://farcaster.xyz)'s Snapchain HTTP API and Optimism contracts.

## Overview

Farcaster Kit provides a set of lightweight, performant, and type-safe TypeScript utilities for building Farcaster applications. It offers:

- **HTTP Client** – Access all Snapchain REST endpoints with full type safety
- **Contract Helpers** – Read and write to Farcaster contracts on Optimism
- **Test Utilities** – Built-in mocking support for reliable testing

Built with [Zile](https://github.com/wevm/zile) for a bundler-free, zero-config experience.

## Installation

```bash
npm install farcasterkit viem
```

## Example Usage

### HTTP API

```typescript
import { FarcasterKit } from 'farcasterkit';

const fc = new FarcasterKit();

const info = await fc.getInfo();
const casts = await fc.getCastsByFid(2);
const userData = await fc.getUserDataByFid(2);
const fids = await fc.getFidsByAddress('0x...');
```

### Contract Reads

```typescript
import { FarcasterKit } from 'farcasterkit';
import { optimism } from 'viem/chains';

const fc = new FarcasterKit('https://snap.farcaster.xyz:3381', {
  chain: optimism,
  rpcUrl: 'https://mainnet.optimism.io',
});

const fid = await fc.getFid('0x4114e33eb831858649ea3702e1c9a2db3f626446');
const storage = await fc.getStorage(2);
const custody = await fc.idRegistry.read.custodyOf(fc.viemClient, 2n);
const price = await fc.storageRegistry.read.price(fc.viemClient, 1n);
```

### Contract Writes

```typescript
import { FarcasterKit } from 'farcasterkit';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { optimism } from 'viem/chains';

const account = privateKeyToAccount('0x...');
const walletClient = createWalletClient({
  account,
  chain: optimism,
  transport: http(),
});

const fc = new FarcasterKit('https://snap.farcaster.xyz:3381', {
  walletClient,
});

const txHash = await fc.idGateway.write.register(
  walletClient,
  '0xRecoveryAddress',
  5n,
  BigInt(0.01 * 1e18)
);
```

## API Reference

[View complete API documentation →](./docs/overview.md)

### HTTP Methods

**Casts**
- `getCastsByFid(fid, options?)` – Get casts by FID
- `getCastById(fid, hash)` – Get specific cast
- `getCastsByParent(parentFid, parentHash, options?)` – Get replies
- `getCastsByMention(fid, options?)` – Get casts mentioning FID

**Users**
- `getUserDataByFid(fid, options?)` – Get user profile data
- `getFidsByAddress(address)` – Get FIDs for address

**Social**
- `getLinksByFid(fid, options?)` – Get follows/links
- `getReactionsByFid(fid, reactionType?, options?)` – Get likes/recasts
- `getReactionsByCast(targetFid, targetHash, reactionType?, options?)` – Get reactions to cast

**Verifications**
- `getVerificationsByFid(fid, options?)` – Get address verifications
- `getUsernameProofsByFid(fid)` – Get username proofs

**Advanced**
- `getMessagesByFid(fid, options?)` – Get all messages
- `getEventsByFid(fid, options?)` – Get hub events
- `getStorageByFid(fid)` – Get storage allocation
- `getOnChainByFid(fid, options?)` – Get on-chain events
- `getInfo()` – Get hub information

### Contract Helpers

**IdRegistry** – FID registration and management
- `read.idOf(client, address)` / `read.custodyOf(client, fid)` / `read.recoveryOf(client, fid)`
- `write.transfer(client, to, deadline, sig)` / `write.changeRecovery(client, recovery)`

**KeyRegistry** – Signer key management
- `read.keys(client, fid, key)` / `read.keyDataOf(client, fid, key)` / `read.keysOf(client, fid, state, startIdx, batchSize)`
- `write.add(client, keyType, key, metadataType, metadata)` / `write.remove(client, key)`

**StorageRegistry** – Storage unit management
- `read.rentedUnits(client, fid)` / `read.price(client, units)` / `read.deprecationTimestamp(client)`
- `write.rent(client, fid, units, value)` / `write.batchRent(client, fids, units, value)` / `write.credit(client, fid, units)`

**Gateways** – Registration and key addition
- `idGateway.write.register(client, recovery, extraStorage, value)`
- `keyGateway.write.add(client, keyType, key, metadataType, metadata)`
- `bundler.write.register(client, registerParams, signerParams, extraStorage, value)`

## Testing

All tests use mocked HTTP and viem clients for reliability:

```typescript
import { createHttpClient } from 'farcasterkit';
import { mockFetch, createMockPublicClient } from 'farcasterkit/jest.setup';

describe('My Tests', () => {
  it('should mock HTTP calls', async () => {
    mockFetch({ messages: [] });
    const client = createHttpClient();
    const result = await getCastsByFid(client, 2);
    expect(result.messages).toEqual([]);
  });

  it('should mock viem reads', async () => {
    const mockClient = createMockPublicClient();
    mockClient.readContract.mockResolvedValue(2n);
    
    const fid = await idRegistry.read.idOf(mockClient, '0x...');
    expect(fid).toBe(2n);
  });
});
```

## Resources

- [Farcaster Contracts Reference](https://docs.farcaster.xyz/reference/contracts/)
- [Snapchain HTTP API](https://docs.farcaster.xyz/reference/hubble/httpapi/httpapi)
- [Viem Documentation](https://viem.sh)
- [Zile Build Tool](https://github.com/wevm/zile)

## License

[MIT Licensed 2025-present](LICENSE.md) by [Dylan Steck](https://dylansteck.com)
