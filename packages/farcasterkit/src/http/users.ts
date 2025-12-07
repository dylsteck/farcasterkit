import type { HttpClient } from './client';
import type { MessagesResponse, FidsResponse } from '../types';

export async function getUserDataByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/userDataByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getFidsByAddress(
  client: HttpClient,
  address: string
): Promise<FidsResponse> {
  return client.get<FidsResponse>('/v1/fidsByAddress', { address });
}



