# Overview

Complete technical reference for Farcaster Kit.

## Architecture

Farcaster Kit provides two main interfaces:

- **HTTP Client** – REST API access via `HttpClient` to Snapchain endpoints
- **Contract Helpers** – Viem-powered helpers for Farcaster contracts on Optimism

## Initialization

```typescript
new FarcasterKit(snapchainUrl?: string, options?: ConstructorOptions)
```

**Parameters:**
- `snapchainUrl` (optional) – Snapchain HTTP endpoint (default: `https://snap.farcaster.xyz:3381`)
- `options` (optional):
  - `rpcUrl?: string` – Optimism RPC endpoint
  - `chain?: Chain` – Viem chain config (default: `optimism`)
  - `walletClient?: WalletClient` – Viem wallet client for write operations

**Properties:**
- `httpClient: HttpClient` – HTTP client instance
- `viemClient: PublicClient` – Viem public client for reads
- `walletClient?: WalletClient` – Viem wallet client for writes
- `snapchainUrl: string` – Snapchain endpoint URL
- `idRegistry` – IdRegistry contract helpers
- `keyRegistry` – KeyRegistry contract helpers
- `storageRegistry` – StorageRegistry contract helpers
- `idGateway` – IdGateway contract helpers
- `keyGateway` – KeyGateway contract helpers
- `bundler` – Bundler contract helpers

## HTTP Methods

All pagination options support:
- `pageSize?: number` – Number of results per page
- `pageToken?: string` – Token for next page
- `reverse?: boolean` – Reverse chronological order

### Casts

#### `getCastsByFid(fid, options?)`
Get casts by FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getCastById(fid, hash)`
Get specific cast by FID and hash.

**Parameters:**
- `fid: number` – Farcaster ID
- `hash: string` – Cast hash

**Returns:** `Promise<Message>`

#### `getCastsByParent(parentFid, parentHash, options?)`
Get replies to a cast.

**Parameters:**
- `parentFid: number` – Parent cast FID
- `parentHash: string` – Parent cast hash
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getCastsByMention(fid, options?)`
Get casts mentioning a FID.

**Parameters:**
- `fid: number` – Mentioned FID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

### Users

#### `getUserDataByFid(fid, options?)`
Get user profile data.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getFidsByAddress(address)`
Get FIDs owned by Ethereum address.

**Parameters:**
- `address: string` – Ethereum address

**Returns:** `Promise<FidsResponse>`

### Social

#### `getLinksByFid(fid, options?)`
Get links (follows) for FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getReactionsByFid(fid, reactionType?, options?)`
Get reactions by FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `reactionType?: 'LIKE' | 'RECAST'` – Filter by reaction type
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getReactionsByCast(targetFid, targetHash, reactionType?, options?)`
Get reactions to a cast.

**Parameters:**
- `targetFid: number` – Cast FID
- `targetHash: string` – Cast hash
- `reactionType?: 'LIKE' | 'RECAST'` – Filter by reaction type
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

### Verifications

#### `getVerificationsByFid(fid, options?)`
Get address verifications for FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getUsernameProofsByFid(fid)`
Get username proofs for FID.

**Parameters:**
- `fid: number` – Farcaster ID

**Returns:** `Promise<UsernameProofsResponse>`

### Advanced

#### `getMessagesByFid(fid, options?)`
Get all messages by FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<MessagesResponse>`

#### `getEventsByFid(fid, options?)`
Get hub events for FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: { pageSize?: number; pageToken?: string }`

**Returns:** `Promise<HubEventResponse>`

#### `getStorageByFid(fid)`
Get storage allocation for FID.

**Parameters:**
- `fid: number` – Farcaster ID

**Returns:** `Promise<StorageResponse>`

#### `getOnChainByFid(fid, options?)`
Get on-chain events for FID.

**Parameters:**
- `fid: number` – Farcaster ID
- `options?: PaginationOptions`

**Returns:** `Promise<OnChainEventResponse>`

#### `getInfo()`
Get hub information.

**Returns:** `Promise<HubInfoResponse>`

### Convenience Methods

#### `getFid(address)`
Get FID for Ethereum address (calls `idRegistry.read.idOf`).

**Parameters:**
- `address: Address` – Ethereum address

**Returns:** `Promise<bigint>`

#### `getStorage(fid)`
Get storage units for FID (calls `storageRegistry.read.rentedUnits`).

**Parameters:**
- `fid: number` – Farcaster ID

**Returns:** `Promise<bigint>`

## Contract Reads

All read methods require a `PublicClient` from viem.

### IdRegistry

#### `idRegistry.read.idOf(client, owner)`
Get FID for Ethereum address.

**Parameters:**
- `client: PublicClient` – Viem public client
- `owner: Address` – Ethereum address

**Returns:** `Promise<bigint>` – FID (0 if not registered)

#### `idRegistry.read.custodyOf(client, fid)`
Get custody address for FID.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID

**Returns:** `Promise<Address>` – Custody address

#### `idRegistry.read.recoveryOf(client, fid)`
Get recovery address for FID.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID

**Returns:** `Promise<Address>` – Recovery address

### KeyRegistry

#### `keyRegistry.read.keys(client, fid, key)`
Get key state.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID
- `key: 0x${string}` – Public key

**Returns:** `Promise<number>` – Key state

#### `keyRegistry.read.keyDataOf(client, fid, key)`
Get key metadata.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID
- `key: 0x${string}` – Public key

**Returns:** `Promise<KeyData>` – `{ state: number; keyType: number }`

#### `keyRegistry.read.keysOf(client, fid, state, startIdx, batchSize)`
Get keys for FID.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID
- `state: number` – Key state filter
- `startIdx: bigint` – Start index
- `batchSize: bigint` – Batch size

**Returns:** `Promise<readonly 0x${string}[]>` – Array of public keys

### StorageRegistry

#### `storageRegistry.read.rentedUnits(client, fid)`
Get storage units for FID.

**Parameters:**
- `client: PublicClient` – Viem public client
- `fid: bigint` – Farcaster ID

**Returns:** `Promise<bigint>` – Storage units

#### `storageRegistry.read.price(client, units)`
Get price for storage units.

**Parameters:**
- `client: PublicClient` – Viem public client
- `units: bigint` – Number of units

**Returns:** `Promise<bigint>` – Price in wei

#### `storageRegistry.read.deprecationTimestamp(client)`
Get deprecation timestamp.

**Parameters:**
- `client: PublicClient` – Viem public client

**Returns:** `Promise<bigint>` – Unix timestamp

## Contract Writes

All write methods require a `WalletClient` from viem and return a transaction hash.

### IdRegistry

#### `idRegistry.write.transfer(client, to, deadline, sig)`
Transfer FID to another address.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `to: Address` – Recipient address
- `deadline: bigint` – Signature deadline (Unix timestamp)
- `sig: 0x${string}` – Transfer signature

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `idRegistry.write.changeRecovery(client, recovery)`
Change recovery address for FID.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `recovery: Address` – New recovery address

**Returns:** `Promise<0x${string}>` – Transaction hash

### KeyRegistry

#### `keyRegistry.write.add(client, keyType, key, metadataType, metadata)`
Add signer key to FID.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `keyType: number` – Key type (1 = EdDSA)
- `key: 0x${string}` – Public key
- `metadataType: number` – Metadata type
- `metadata: 0x${string}` – Key metadata

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `keyRegistry.write.remove(client, key)`
Remove signer key from FID.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `key: 0x${string}` – Public key to remove

**Returns:** `Promise<0x${string}>` – Transaction hash

### StorageRegistry

#### `storageRegistry.write.rent(client, fid, units, value)`
Rent storage units for FID.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `fid: bigint` – Farcaster ID
- `units: bigint` – Number of units
- `value: bigint` – Payment amount in wei

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `storageRegistry.write.batchRent(client, fids, units, value)`
Rent storage for multiple FIDs.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `fids: bigint[]` – Array of FIDs
- `units: bigint[]` – Array of units per FID
- `value: bigint` – Total payment in wei

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `storageRegistry.write.credit(client, fid, units)`
Credit storage units to FID (operator only).

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `fid: bigint` – Farcaster ID
- `units: bigint` – Number of units

**Returns:** `Promise<0x${string}>` – Transaction hash

### Gateways

#### `idGateway.write.register(client, recovery, extraStorage, value)`
Register new FID with storage.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `recovery: Address` – Recovery address
- `extraStorage: bigint` – Additional storage units
- `value: bigint` – Payment amount in wei

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `keyGateway.write.add(client, keyType, key, metadataType, metadata)`
Add key via gateway (requires guardian signature).

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `keyType: number` – Key type
- `key: 0x${string}` – Public key
- `metadataType: number` – Metadata type
- `metadata: 0x${string}` – Key metadata

**Returns:** `Promise<0x${string}>` – Transaction hash

#### `bundler.write.register(client, registerParams, signerParams, extraStorage, value)`
Register FID and add keys in single transaction.

**Parameters:**
- `client: WalletClient` – Viem wallet client
- `registerParams: RegisterParams` – Registration parameters
  - `to: 0x${string}` – FID recipient
  - `recovery: 0x${string}` – Recovery address
  - `sig: 0x${string}` – Registration signature
  - `deadline: bigint` – Signature deadline
- `signerParams: SignerParams[]` – Array of signer keys
  - `keyType: number` – Key type
  - `key: 0x${string}` – Public key
  - `metadataType: number` – Metadata type
  - `metadata: 0x${string}` – Key metadata
  - `sig: 0x${string}` – Key signature
  - `deadline: bigint` – Signature deadline
- `extraStorage: bigint` – Additional storage units
- `value: bigint` – Payment amount in wei

**Returns:** `Promise<0x${string}>` – Transaction hash

## Types

### Response Types

**MessagesResponse**
```typescript
{
  messages: Message[];
  nextPageToken?: string;
}
```

**Message**
```typescript
{
  data: {
    type: string;
    fid: number;
    timestamp: number;
    network: string;
    castAddBody?: CastAddBody;
    reactionBody?: ReactionBody;
    linkBody?: LinkBody;
    verificationAddAddressBody?: VerificationAddAddressBody;
    userDataBody?: UserDataBody;
  };
  hash: string;
  hashScheme: string;
  signature: string;
  signatureScheme: string;
  signer: string;
}
```

**FidsResponse**
```typescript
{
  fids: number[];
  nextPageToken?: string;
}
```

**StorageResponse**
```typescript
{
  units: number;
  limits: {
    storeType: string;
    limit: string;
    used: string;
    earliestTimestamp: number;
    earliestHash: string;
  }[];
}
```

**HubInfoResponse**
```typescript
{
  version: string;
  isSyncing: boolean;
  nickname: string;
  rootHash: string;
  dbStats: {
    numMessages: number;
    numFidEvents: number;
    numFnameEvents: number;
  };
  peerId: string;
  hubOperatorFid: number;
}
```

### Contract Types

**KeyData**
```typescript
{
  state: number;
  keyType: number;
}
```

**RegisterParams**
```typescript
{
  to: `0x${string}`;
  recovery: `0x${string}`;
  sig: `0x${string}`;
  deadline: bigint;
}
```

**SignerParams**
```typescript
{
  keyType: number;
  key: `0x${string}`;
  metadataType: number;
  metadata: `0x${string}`;
  sig: `0x${string}`;
  deadline: bigint;
}
```

## Contract Addresses

All contracts are deployed on Optimism mainnet:

- **IdRegistry**: `0x00000000fc6c5f01fc30151999387bb99a9f489b`
- **KeyRegistry**: `0x00000000Fc1237824fb747aBDE0FF18990E59b7e`
- **StorageRegistry**: `0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D`
- **IdGateway**: `0x00000000fc25870c6ed6b6c7e41fb078b7656f69`
- **KeyGateway**: `0x00000000fc56947c7e7183f8ca4b62398caadf0b`
- **Bundler**: `0x00000000fc04c910a0b5fea33b03e0447ad0b0aa`

