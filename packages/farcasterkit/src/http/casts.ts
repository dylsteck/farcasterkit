import type { HttpClient } from './client';
import type { MessagesResponse, Message } from '../types';

export async function getCastsByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/castsByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getCastById(
  client: HttpClient,
  fid: number,
  hash: string
): Promise<Message> {
  return client.get<Message>('/v1/castById', { fid, hash });
}

export async function getCastsByParent(
  client: HttpClient,
  parentFid: number,
  parentHash: string,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/castsByParent', {
    fid: parentFid,
    hash: parentHash,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getCastsByMention(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/castsByMention', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}



