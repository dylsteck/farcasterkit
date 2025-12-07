import type { HttpClient } from './client';
import type { MessagesResponse } from '../types';

export async function getLinksByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/linksByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getReactionsByFid(
  client: HttpClient,
  fid: number,
  reactionType?: 'LIKE' | 'RECAST',
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/reactionsByFid', {
    fid,
    reactionType,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getReactionsByCast(
  client: HttpClient,
  targetFid: number,
  targetHash: string,
  reactionType?: 'LIKE' | 'RECAST',
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/reactionsByCast', {
    targetFid,
    targetHash,
    reactionType,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}



