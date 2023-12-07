import React from 'react';
import QRCode from 'qrcode.react';
import { useLogin } from '@/providers/NeynarProvider';

const NeynarAuth: React.FC = () => {
  const { farcasterUser, handleSignIn, loading } = useLogin();

  if (!farcasterUser) {
    return (
      <button onClick={handleSignIn} disabled={loading}>
        {loading ? 'Loading...' : 'Sign in with Farcaster'}
      </button>
    );
  }

  if (farcasterUser.status === 'pending_approval' && farcasterUser.signer_approval_url) {
    return (
      <div>
        <QRCode value={farcasterUser.signer_approval_url} />
        <a href={farcasterUser.signer_approval_url} target="_blank" rel="noopener noreferrer">
          Click here to view the signer URL
        </a>
      </div>
    );
  }

  return <div>{`You are logged in as fid ${farcasterUser.fid}`}</div>;
};

export default NeynarAuth;