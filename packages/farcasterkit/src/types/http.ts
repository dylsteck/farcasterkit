export interface Message {
  data: {
    type: string;
    fid: number;
    timestamp: number;
    network: string;
    castAddBody?: CastAddBody;
    castRemoveBody?: CastRemoveBody;
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

export interface CastAddBody {
  embedsDeprecated: string[];
  mentions: number[];
  parentCastId?: CastId;
  parentUrl?: string;
  text: string;
  mentionsPositions: number[];
  embeds: Embed[];
}

export interface CastRemoveBody {
  targetHash: string;
}

export interface ReactionBody {
  type: 'LIKE' | 'RECAST';
  targetCastId?: CastId;
  targetUrl?: string;
}

export interface LinkBody {
  type: string;
  displayTimestamp?: number;
  targetFid?: number;
}

export interface VerificationAddAddressBody {
  address: string;
  claimSignature: string;
  blockHash: string;
  verificationType: number;
  chainId: number;
  protocol: number;
}

export interface UserDataBody {
  type: string;
  value: string;
}

export interface CastId {
  fid: number;
  hash: string;
}

export interface Embed {
  url?: string;
  castId?: CastId;
}

export interface MessagesResponse {
  messages: Message[];
  nextPageToken?: string;
}

export interface UserDataResponse {
  data: Message;
}

export interface FidsResponse {
  fids: number[];
  nextPageToken?: string;
}

export interface StorageLimit {
  limit: string;
  used: string;
  earliestTimestamp: number;
  earliestHash: string;
}

export interface StorageResponse {
  units: number;
  limits: {
    storeType: string;
    limit: string;
    used: string;
    earliestTimestamp: number;
    earliestHash: string;
  }[];
}

export interface OnChainEvent {
  type: string;
  chainId: number;
  blockNumber: number;
  blockHash: string;
  blockTimestamp: number;
  transactionHash: string;
  logIndex: number;
  fid: number;
  body?: Record<string, any>;
}

export interface OnChainEventResponse {
  events: OnChainEvent[];
  nextPageToken?: string;
}

export interface HubEvent {
  type: string;
  id: number;
  body?: Record<string, any>;
}

export interface HubEventResponse {
  events: HubEvent[];
  nextPageToken?: string;
}

export interface UsernameProof {
  timestamp: number;
  name: string;
  owner: string;
  signature: string;
  fid: number;
  type: string;
}

export interface UsernameProofsResponse {
  proofs: UsernameProof[];
}

export interface HubInfoResponse {
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



