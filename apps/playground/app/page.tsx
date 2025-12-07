'use client';

import { useState } from 'react';
import { Button, Code, Card } from '@repo/ui';
import { FarcasterKit } from 'farcasterkit';

const kit = new FarcasterKit();

export default function Home() {
  const [fid, setFid] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [hubInfo, setHubInfo] = useState<any>(null);
  const [fidResult, setFidResult] = useState<any>(null);
  const [storageResult, setStorageResult] = useState<any>(null);

  const handleGetHubInfo = async () => {
    try {
      const info = await kit.getHubInfo();
      setHubInfo(info);
    } catch (error) {
      console.error(error);
      setHubInfo({ error: 'Failed to fetch hub info' });
    }
  };

  const handleGetFid = async () => {
    if (!address) return;
    try {
      // Mocking address if needed for checks, but actual call handles logic
      const result = await kit.getFid(address);
      setFidResult(result);
    } catch (error) {
      console.error(error);
      setFidResult({ error: 'Failed to fetch FID' });
    }
  };

  const handleGetStorage = async () => {
    if (!fid) return;
    try {
      const result = await kit.getStorage(Number(fid));
      setStorageResult(result);
    } catch (error) {
      console.error(error);
      setStorageResult({ error: 'Failed to fetch Storage' });
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">FarcasterKit Playground</h1>

        <div className="grid gap-6 w-full">
          <Card title="Hub Info">
            <div className="p-4 flex flex-col gap-4">
              <p>Fetch information from the Farcaster Hub.</p>
              <Button appName="playground" onClick={handleGetHubInfo}>Get Hub Info</Button>
              {hubInfo && (
                <div className="mt-4">
                  <Code>{JSON.stringify(hubInfo, null, 2)}</Code>
                </div>
              )}
            </div>
          </Card>

          <Card title="Get FID">
            <div className="p-4 flex flex-col gap-4">
              <p>Get FID for an Ethereum Address (Optimism).</p>
              <input
                type="text"
                placeholder="0x..."
                className="p-2 border rounded text-black"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button appName="playground" onClick={handleGetFid}>Get FID</Button>
              {fidResult && (
                <div className="mt-4">
                  <Code>{JSON.stringify(fidResult, null, 2)}</Code>
                </div>
              )}
            </div>
          </Card>

          <Card title="Get Storage">
            <div className="p-4 flex flex-col gap-4">
              <p>Get Storage Rent for an FID (Optimism).</p>
              <input
                type="number"
                placeholder="FID"
                className="p-2 border rounded text-black"
                value={fid}
                onChange={(e) => setFid(e.target.value)}
              />
              <Button appName="playground" onClick={handleGetStorage}>Get Storage</Button>
              {storageResult && (
                <div className="mt-4">
                  <Code>{JSON.stringify(storageResult, null, 2)}</Code>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
