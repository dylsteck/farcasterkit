import type { HttpClient } from './client';
import type { MessagesResponse, UsernameProofsResponse } from '../types';

export async function getVerificationsByFid(
  client: HttpClient,
  fid: number,
  options?: { pageSize?: number; pageToken?: string; reverse?: boolean }
): Promise<MessagesResponse> {
  return client.get<MessagesResponse>('/v1/verificationsByFid', {
    fid,
    pageSize: options?.pageSize,
    pageToken: options?.pageToken,
    reverse: options?.reverse,
  });
}

export async function getUsernameProofsByFid(
  client: HttpClient,
  fid: number
): Promise<UsernameProofsResponse> {
  return client.get<UsernameProofsResponse>('/v1/usernameProofsByFid', { fid });
}



