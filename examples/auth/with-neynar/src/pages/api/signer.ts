import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { mnemonicToAccount } from 'viem/accounts';
import { FARCASTER_DEVELOPER_FID, FARCASTER_DEVELOPER_MNEMONIC } from '@/consants';

interface GenerateSignatureResponse {
  deadline: number;
  signature: string;
}

async function generate_signature(publicKey: string): Promise<GenerateSignatureResponse> {
  const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
    name: 'Farcaster SignedKeyRequestValidator',
    version: '1',
    chainId: 10,
    verifyingContract: '0x00000000fc700472606ed4fa22623acf62c60553' as `0x${string}`,
  };

  const SIGNED_KEY_REQUEST_TYPE = [
    { name: 'requestFid', type: 'uint256' },
    { name: 'key', type: 'bytes' },
    { name: 'deadline', type: 'uint256' },
  ];

  const account = mnemonicToAccount(FARCASTER_DEVELOPER_MNEMONIC);
  const deadline = Math.floor(Date.now() / 1000) + 86400;
  const signature = await account.signTypedData({
    domain: SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN,
    types: {
      SignedKeyRequest: SIGNED_KEY_REQUEST_TYPE,
    },
    primaryType: 'SignedKeyRequest',
    message: {
      requestFid: BigInt(FARCASTER_DEVELOPER_FID),
      key: publicKey,
      deadline: BigInt(deadline),
    },
  });

  return { deadline, signature };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const createSignerResponse = await axios.post(
        'https://api.neynar.com/v2/farcaster/signer',
        {},
        {
          headers: {
            api_key: process.env.NEYNAR_API_KEY as string,
          },
        },
      );

      const { deadline, signature } = await generate_signature(
        createSignerResponse.data.public_key,
      );

      const signedKeyResponse = await axios.post(
        'https://api.neynar.com/v2/farcaster/signer/signed_key',
        {
          signer_uuid: createSignerResponse.data.signer_uuid,
          app_fid: FARCASTER_DEVELOPER_FID,
          deadline,
          signature,
        },
        {
          headers: {
            api_key: process.env.NEYNAR_API_KEY as string,
          },
        },
      );

      res.json(signedKeyResponse.data);
    } else if (req.method === 'GET') {
      const response = await axios.get(
        'https://api.neynar.com/v2/farcaster/signer',
        {
          params: req.query,
          headers: {
            api_key: process.env.NEYNAR_API_KEY as string,
          },
        },
      );
      res.json(response.data);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}