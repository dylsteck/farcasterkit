import { type Generated, type GeneratedAlways } from "kysely";

enum UserDataType {
  USER_DATA_TYPE_NONE = 0,
  USER_DATA_TYPE_PFP = 1, // Profile Picture for the user
  USER_DATA_TYPE_DISPLAY = 2, // Display Name for the user
  USER_DATA_TYPE_BIO = 3, // Bio for the user
  USER_DATA_TYPE_URL = 5, // URL of the user
  USER_DATA_TYPE_FNAME = 6, // Preferred Farcaster Name for the user
}

export interface KyselyDB {
  messages: {
    id: bigint;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    pruned_at: string;
    revoked_at: string;
    timestamp: string;
    fid: bigint;
    message_type: number;
    hash: Buffer;
    hash_scheme: number;
    signature: Buffer;
    signature_scheme: number;
    signer: Buffer;
    raw: Buffer;
  };
  casts: {
    id: GeneratedAlways<string>;
    createdAt: Generated<Date>;
    updatedAt: Generated<Date>;
    deletedAt: Date | null;
    timestamp: Date;
    fid: number;
    text: string;
    hash: string;
    parent_hash: string | null;
    fname: string | null;
    parentFid: number | null;
    parent_url: string | null;
    pfp: string | null;
    embeds: Generated<
      {
        url?: string | undefined;
        castId?: object | undefined;
      }[]
    >;
    mentions: Generated<number[]>;
    mentionsPositions: Generated<number[]>;
  };
  reactions: {
    id: bigint;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    timestamp: string;
    fid: bigint;
    reaction_type: number;
    hash: Buffer;
    target_hash: Buffer | null;
    target_fid: bigint | null;
    target_url: string | null;
  };
  verifications: {
    id: bigint;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    timestamp: string;
    fid: bigint;
    hash: Buffer;
    claim: object;
  };
  signers: {
    id: bigint;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    timestamp: string;
    fid: bigint;
    hash: Buffer;
    custody_address: Buffer;
    signer: Buffer;
    name: string;
  };
  user_data: {
    id: bigint;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    timestamp: string;
    fid: bigint;
    hash: Buffer;
    type: UserDataType;
    value: string;
  };
  fids: {
    fid: bigint;
    created_at: string;
    updated_at: string;
    custody_address: Buffer;
  };
  users: {
    fid: bigint;
    created_at: string;
    custody_address: Buffer;
    pfp: string | null;
    display: string | null;
    bio: string | null;
    url: string | null;
    fname: string | null;
  };
  ens_leaderboard: {
    rank: bigint;
    eth_name: string;
    display: string;
    pfp: string;
    fid: number;
    follower_count: bigint;
  }
}