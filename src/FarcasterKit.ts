import { createPublicClient, http, type Address, type Chain, type PublicClient, type WalletClient } from 'viem';
import { optimism } from 'viem/chains';
import { SNAPCHAIN_BASE_URL } from './constants/contracts.js';
import { HttpClient } from './http/client.js';
import * as httpMethods from './http/index.js';
import * as contracts from './contracts/index.js';
import type { MessagesResponse, Message, FidsResponse, UsernameProofsResponse, StorageResponse, OnChainEventResponse, HubEventResponse, HubInfoResponse } from './types/index.js';

export class FarcasterKit {
  public httpClient: HttpClient;
  public viemClient: PublicClient;
  public walletClient?: WalletClient;
  public snapchainUrl: string;

  public idRegistry = contracts.idRegistry;
  public keyRegistry = contracts.keyRegistry;
  public storageRegistry = contracts.storageRegistry;
  public idGateway = contracts.idGateway;
  public keyGateway = contracts.keyGateway;
  public bundler = contracts.bundler;

  constructor(
    snapchainUrl: string = SNAPCHAIN_BASE_URL,
    options?: {
      rpcUrl?: string;
      chain?: Chain;
      walletClient?: WalletClient;
    }
  ) {
    this.snapchainUrl = snapchainUrl;
    this.httpClient = new HttpClient(snapchainUrl);
    this.viemClient = createPublicClient({
      chain: options?.chain || optimism,
      transport: http(options?.rpcUrl),
    }) as PublicClient;
    this.walletClient = options?.walletClient;
  }

  async getInfo(): Promise<HubInfoResponse> {
    return httpMethods.getInfo(this.httpClient);
  }

  async getCastsByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getCastsByFid(this.httpClient, fid, options);
  }

  async getCastById(fid: number, hash: string): Promise<Message> {
    return httpMethods.getCastById(this.httpClient, fid, hash);
  }

  async getCastsByParent(
    parentFid: number,
    parentHash: string,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getCastsByParent(this.httpClient, parentFid, parentHash, options);
  }

  async getCastsByMention(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getCastsByMention(this.httpClient, fid, options);
  }

  async getUserDataByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getUserDataByFid(this.httpClient, fid, options);
  }

  async getFidsByAddress(address: string): Promise<FidsResponse> {
    return httpMethods.getFidsByAddress(this.httpClient, address);
  }

  async getLinksByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getLinksByFid(this.httpClient, fid, options);
  }

  async getReactionsByFid(
    fid: number,
    reactionType?: 'LIKE' | 'RECAST',
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getReactionsByFid(this.httpClient, fid, reactionType, options);
  }

  async getReactionsByCast(
    targetFid: number,
    targetHash: string,
    reactionType?: 'LIKE' | 'RECAST',
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getReactionsByCast(this.httpClient, targetFid, targetHash, reactionType, options);
  }

  async getVerificationsByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getVerificationsByFid(this.httpClient, fid, options);
  }

  async getUsernameProofsByFid(fid: number): Promise<UsernameProofsResponse> {
    return httpMethods.getUsernameProofsByFid(this.httpClient, fid);
  }

  async getMessagesByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<MessagesResponse> {
    return httpMethods.getMessagesByFid(this.httpClient, fid, options);
  }

  async getEventsByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string }
  ): Promise<HubEventResponse> {
    return httpMethods.getEventsByFid(this.httpClient, fid, options);
  }

  async getStorageByFid(fid: number): Promise<StorageResponse> {
    return httpMethods.getStorageByFid(this.httpClient, fid);
  }

  async getOnChainByFid(
    fid: number,
    options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
  ): Promise<OnChainEventResponse> {
    return httpMethods.getOnChainByFid(this.httpClient, fid, options);
  }

  async getFid(address: Address): Promise<bigint> {
    return this.idRegistry.read.idOf(this.viemClient, address);
  }

  async getStorage(fid: number): Promise<bigint> {
    return this.storageRegistry.read.rentedUnits(this.viemClient, BigInt(fid));
  }
}

