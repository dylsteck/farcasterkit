"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeynarRouter = void 0;
const express_1 = require("express");
const node_fetch_1 = __importDefault(require("node-fetch"));
const url_1 = require("url");
const accounts_1 = require("viem/accounts");
// Enter the FID and mnemonic for the Farcaster account you want to use
const FARCASTER_DEVELOPER_FID = '<Yout Farcaster developer FID';
const FARCASTER_DEVELOPER_MNEMONIC = '<Your Farcaster developer mnemonic>';
const router = (0, express_1.Router)();
async function generateSignature(publicKey) {
    const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
        name: 'Farcaster SignedKeyRequestValidator',
        version: '1',
        chainId: 10,
        verifyingContract: '0x00000000fc700472606ed4fa22623acf62c60553',
    };
    const SIGNED_KEY_REQUEST_TYPE = [
        { name: 'requestFid', type: 'uint256' },
        { name: 'key', type: 'bytes' },
        { name: 'deadline', type: 'uint256' },
    ];
    const account = (0, accounts_1.mnemonicToAccount)(FARCASTER_DEVELOPER_MNEMONIC);
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
        const queryParams = new url_1.URLSearchParams();
        Object.entries(req.query).forEach(([key, value]) => {
            if (typeof value === 'string') {
                queryParams.append(key, value);
            }
        });
        const response = await (0, node_fetch_1.default)(`https://api.neynar.com/v2/farcaster/signer?${queryParams}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.NEYNAR_API_KEY,
            }
        });
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        console.error('Error in GET /api/signer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post("/signer", async (req, res) => {
    try {
        const response = await (0, node_fetch_1.default)('https://api.neynar.com/v2/farcaster/signer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.NEYNAR_API_KEY,
            },
        });
        const data = await response.json();
        const { deadline, signature } = await generateSignature(data.public_key);
        const signedKeyResponse = await (0, node_fetch_1.default)('https://api.neynar.com/v2/farcaster/signer/signed_key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.NEYNAR_API_KEY,
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
    }
    catch (error) {
        console.error('Error in POST /api/signer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/cast', async (req, res) => {
    try {
        const { signer_uuid, text, parent, channel_id } = req.body;
        const requestBody = {
            signer_uuid,
            text,
            parent,
            channel_id
        };
        const apiResponse = await (0, node_fetch_1.default)('https://api.neynar.com/v2/farcaster/cast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.NEYNAR_API_KEY
            },
            body: JSON.stringify(requestBody)
        });
        const apiResult = await apiResponse.json();
        if (apiResponse.ok) {
            res.status(200).json(apiResult);
        }
        else {
            res.status(apiResponse.status).json(apiResult);
        }
    }
    catch (error) {
        console.error('Error in /cast route:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.NeynarRouter = router;
//# sourceMappingURL=controller.js.map