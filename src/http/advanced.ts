import type { HttpClient } from './client.js';
import type {
  MessagesResponse,
  StorageResponse,
  OnChainEventResponse,
  HubEventResponse,
  HubInfoResponse,
} from '../types/index.js';

export async function getMessagesByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/messagesByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getEventsByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string }
): Promise<HubEventResponse> {
  return client.get<HubEventResponse>('/v1/eventsByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
  });
}

export async function getStorageByFid(
  client: HttpClient,
  fid: number
): Promise<StorageResponse> {
  return client.get<StorageResponse>('/v1/storageByFid', { fid });
}

export async function getOnChainByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<OnChainEventResponse> {
  return client.get<OnChainEventResponse>('/v1/onChainByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getInfo(client: HttpClient): Promise<HubInfoResponse> {
  return client.get<HubInfoResponse>('/v1/info');
}

