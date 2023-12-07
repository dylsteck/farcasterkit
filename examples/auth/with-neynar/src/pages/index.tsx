import React, { useEffect, useState } from 'react';
import NeynarAuth from '@/components/NeynarAuth';
import { FarcasterUser, usePostCast, useLogin } from '@/providers/NeynarProvider';
import axios from 'axios';
import { DEFAULT_CAST, LOCAL_STORAGE_KEYS } from '@/consants';
import NeynarCasts from '@/components/NeynarCasts';

function App() {
  const { farcasterUser, setFarcasterUser } = useLogin();
  const { handleCast, isCasting } = usePostCast();
  const [text, setText] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEYS.FARCASTER_USER);
    if (storedData) {
      const user: FarcasterUser = JSON.parse(storedData);
      console.log("USER", user);
      setFarcasterUser(user);
    }
  }, [setFarcasterUser]);

  useEffect(() => {
    if (farcasterUser && farcasterUser.status === 'pending_approval') {
      const intervalId = setInterval(async () => {
        try {
          const response = await axios.get(`/api/signer?signer_uuid=${farcasterUser.signer_uuid}`);
          const updatedUser = response.data as FarcasterUser;
          if (updatedUser?.status === 'approved') {
            setFarcasterUser(updatedUser);
            clearInterval(intervalId);
          }
        } catch (error) {
          console.error('Error during polling', error);
        }
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [farcasterUser, setFarcasterUser]);

  const onCast = async () => {
    const castText = text.length === 0 ? DEFAULT_CAST : text;
    await handleCast(castText);
    setText('');
    displayToast();
  };

  const displayToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="App">
      <NeynarAuth />
      {farcasterUser && farcasterUser.status === 'approved' &&
        <div className="cast-container flex flex-row items-end gap-2">
          <textarea
            className="cast-textarea text-black rounded-md p-1"
            placeholder={DEFAULT_CAST}
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
          />
          <button
            className="cast-button max-h-[5vh] items-center rounded-md bg-violet-800 text-white p-1.5"
            style={{
              cursor: isCasting ? 'not-allowed' : 'pointer',
            }}
            onClick={onCast}
            disabled={isCasting}
          >
            {isCasting ? <span>🔄</span> : 'Cast'}
          </button>
          {showToast && <div className="toast">Cast published</div>}
        </div>
      }
      <NeynarCasts />
    </div>
  );
}

export default App;