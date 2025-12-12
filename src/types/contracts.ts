export interface RegisterParams {
  to: `0x${string}`;
  recovery: `0x${string}`;
  sig: `0x${string}`;
  deadline: bigint;
}

export interface SignerParams {
  keyType: number;
  key: `0x${string}`;
  metadataType: number;
  metadata: `0x${string}`;
  sig: `0x${string}`;
  deadline: bigint;
}

export interface KeyData {
  state: number;
  keyType: number;
}

