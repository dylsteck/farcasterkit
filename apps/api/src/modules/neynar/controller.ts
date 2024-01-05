import { Router } from "express";
import fetch from "node-fetch";
import { URLSearchParams } from "url";

import { mnemonicToAccount } from 'viem/accounts';

// Enter the FID and mnemonic for the Farcaster account you want to use
const FARCASTER_DEVELOPER_FID = '10211';
const FARCASTER_DEVELOPER_MNEMONIC = 'increase flock kingdom enemy clip kiwi team deny pink barely work drink record foot alert push today pigeon awful slight armed luxury fork horse';

const router = Router();

export type GenerateSignatureResponse = {
    deadline: number;
    signature: string;
}
  
async function generateSignature(publicKey: string): Promise<GenerateSignatureResponse> {
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

router.get("/signer", async (req, res) => {
  try {
    const queryParams = new URLSearchParams();
    Object.entries(req.query).forEach(([key, value]) => {
      if (typeof value === 'string') {
        queryParams.append(key, value);
      }
    });

    const response = await fetch(`https://api.neynar.com/v2/farcaster/signer?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api_key': process.env.NEYNAR_API_KEY ?? "",
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error in GET /api/signer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post("/signer", async (req, res) => {
  try {
    const response = await fetch('https://api.neynar.com/v2/farcaster/signer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': process.env.NEYNAR_API_KEY ?? "",
      },
    });
    const data = await response.json() as any;

    const { deadline, signature } = await generateSignature(data.public_key);

    const signedKeyResponse = await fetch('https://api.neynar.com/v2/farcaster/signer/signed_key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': process.env.NEYNAR_API_KEY ?? "",
      },
      body: JSON.stringify({
        signer_uuid: data.signer_uuid,
        app_fid: FARCASTER_DEVELOPER_FID,
        deadline,
        signature,
      }),
    });
    const signedKeyData = await signedKeyResponse.json();

    res.status(200).json(signedKeyData);
  } catch (error) {
    console.error('Error in POST /api/signer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/cast', async (req, res) => {
  try {
    const { signer_uuid, text, parent, channel_id } = req.body;

    // Construct the request body for Neynar API
    const requestBody = {
      signer_uuid,
      text,
      parent,
      channel_id, // Include other fields if required
    };

    // Send the request to the Neynar API
    const apiResponse = await fetch('https://api.neynar.com/v2/farcaster/cast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': process.env.NEYNAR_API_KEY ?? "",
      },
      body: JSON.stringify(requestBody)
    });

    const apiResult = await apiResponse.json();

    // Send the response back to the client
    if (apiResponse.ok) {
      res.status(200).json(apiResult);
    } else {
      // Handle errors
      res.status(apiResponse.status).json(apiResult);
    }
  } catch (error) {
    console.error('Error in /cast route:', error);
    res.status(500).send('Internal Server Error');
  }
});



export const NeynarRouter = router;