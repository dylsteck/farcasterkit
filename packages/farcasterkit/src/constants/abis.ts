export const ID_REGISTRY_ABI = [
  {
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'idOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'fid', type: 'uint256' }],
    name: 'custodyOf',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'fid', type: 'uint256' }],
    name: 'recoveryOf',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'deadline', type: 'uint256' },
      { name: 'sig', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'recovery', type: 'address' }],
    name: 'changeRecovery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export const KEY_REGISTRY_ABI = [
  {
    inputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'key', type: 'bytes' },
    ],
    name: 'keys',
    outputs: [{ name: '', type: 'uint32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'key', type: 'bytes' },
    ],
    name: 'keyDataOf',
    outputs: [
      {
        components: [
          { name: 'state', type: 'uint8' },
          { name: 'keyType', type: 'uint32' },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'state', type: 'uint8' },
      { name: 'startIdx', type: 'uint256' },
      { name: 'batchSize', type: 'uint256' },
    ],
    name: 'keysOf',
    outputs: [{ name: '', type: 'bytes[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'keyType', type: 'uint32' },
      { name: 'key', type: 'bytes' },
      { name: 'metadataType', type: 'uint8' },
      { name: 'metadata', type: 'bytes' },
    ],
    name: 'add',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'key', type: 'bytes' }],
    name: 'remove',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export const STORAGE_REGISTRY_ABI = [
  {
    inputs: [{ name: 'fid', type: 'uint256' }],
    name: 'rentedUnits',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'units', type: 'uint256' }],
    name: 'price',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deprecationTimestamp',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'units', type: 'uint256' },
    ],
    name: 'rent',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'fids', type: 'uint256[]' },
      { name: 'units', type: 'uint256[]' },
    ],
    name: 'batchRent',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'units', type: 'uint256' },
    ],
    name: 'credit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export const ID_GATEWAY_ABI = [
  {
    inputs: [
      { name: 'recovery', type: 'address' },
      { name: 'extraStorage', type: 'uint256' },
    ],
    name: 'register',
    outputs: [
      { name: 'fid', type: 'uint256' },
      { name: 'overpayment', type: 'uint256' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

export const KEY_GATEWAY_ABI = [
  {
    inputs: [
      { name: 'keyType', type: 'uint32' },
      { name: 'key', type: 'bytes' },
      { name: 'metadataType', type: 'uint8' },
      { name: 'metadata', type: 'bytes' },
    ],
    name: 'add',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export const BUNDLER_ABI = [
  {
    inputs: [
      {
        components: [
          { name: 'to', type: 'address' },
          { name: 'recovery', type: 'address' },
          { name: 'sig', type: 'bytes' },
          { name: 'deadline', type: 'uint256' },
        ],
        name: 'registerParams',
        type: 'tuple',
      },
      {
        components: [
          { name: 'keyType', type: 'uint32' },
          { name: 'key', type: 'bytes' },
          { name: 'metadataType', type: 'uint8' },
          { name: 'metadata', type: 'bytes' },
          { name: 'sig', type: 'bytes' },
          { name: 'deadline', type: 'uint256' },
        ],
        name: 'signerParams',
        type: 'tuple[]',
      },
      { name: 'extraStorage', type: 'uint256' },
    ],
    name: 'register',
    outputs: [{ name: 'fid', type: 'uint256' }],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;



