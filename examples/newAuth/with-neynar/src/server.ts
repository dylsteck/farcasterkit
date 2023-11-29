import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import axios from 'axios';
import path from 'path';
import { mnemonicToAccount } from 'viem/accounts';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (typeof process.env.FARCASTER_DEVELOPER_MNEMONIC === 'undefined') {
  throw new Error('FARCASTER_DEVELOPER_MNEMONIC is not defined');
}
const FARCASTER_DEVELOPER_MNEMONIC = process.env.FARCASTER_DEVELOPER_MNEMONIC;

if (typeof process.env.FARCASTER_DEVELOPER_FID === 'undefined') {
  throw new Error('FARCASTER_DEVELOPER_FID is not defined');
}
const FARCASTER_DEVELOPER_FID = process.env.FARCASTER_DEVELOPER_FID;

// Serve static assets (React app) in production
if (process.env.NODE_ENV === 'production') {
  // Set the build folder as a static directory
  app.use(express.static('build'));
}

// Proxy endpoint
app.post('/api/signer', async (req, res) => {
  try {
    const createSignerResponse = await axios.post(
      'https://api.neynar.com/v2/farcaster/signer',
      {},
      {
        headers: {
          api_key: process.env.NEYNAR_API_KEY,
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
          api_key: process.env.NEYNAR_API_KEY,
        },
      },
    );

    res.json(signedKeyResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/signer', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.neynar.com/v2/farcaster/signer',
      {
        params: req.query,
        headers: {
          api_key: process.env.NEYNAR_API_KEY,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/cast', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.neynar.com/v2/farcaster/cast',
      req.body,
      {
        headers: {
          api_key: process.env.NEYNAR_API_KEY,
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// This should always be the last route
if (process.env.NODE_ENV === 'production') {
  // Serve the index.html file for any unknown routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const generate_signature = async function (public_key: string) {
  // DO NOT CHANGE ANY VALUES IN THIS CONSTANT
  const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
    name: 'Farcaster SignedKeyRequestValidator',
    version: '1',
    chainId: 10,
    verifyingContract:
      '0x00000000fc700472606ed4fa22623acf62c60553' as `0x${string}`,
  };

  // DO NOT CHANGE ANY VALUES IN THIS CONSTANT
  const SIGNED_KEY_REQUEST_TYPE = [
    { name: 'requestFid', type: 'uint256' },
    { name: 'key', type: 'bytes' },
    { name: 'deadline', type: 'uint256' },
  ];

  const account = mnemonicToAccount(FARCASTER_DEVELOPER_MNEMONIC);

  // Generates an expiration date for the signature
  // e.g. 1693927665
  const deadline = Math.floor(Date.now() / 1000) + 86400; // signature is valid for 1 day from now
  // You should pass the same value generated here into the POST /signer/signed-key Neynar API

  // Generates the signature
  const signature = await account.signTypedData({
    domain: SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN,
    types: {
      SignedKeyRequest: SIGNED_KEY_REQUEST_TYPE,
    },
    primaryType: 'SignedKeyRequest',
    message: {
      requestFid: BigInt(FARCASTER_DEVELOPER_FID),
      key: public_key,
      deadline: BigInt(deadline),
    },
  });

  // Logging the deadline and signature to be used in the POST /signer/signed-key Neynar API
  return { deadline, signature };
};
