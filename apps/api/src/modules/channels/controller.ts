import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

router.get("/all", async (req, res) => {

  interface AllChannelsResponse {
    result: {
      channels: Channel[];
    };
  }

  interface Channel {
    id: string;
    url: string;
    name: string;
    description: string;
    imageUrl: string;
    leadFid: number;
    createdAt: number;
  }

  try {
    const response = await fetch('https://api.warpcast.com/v2/all-channels');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as AllChannelsResponse;
    return res.json({
      channels: data.result.channels
    });

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

export const ChannelsRouter = router;