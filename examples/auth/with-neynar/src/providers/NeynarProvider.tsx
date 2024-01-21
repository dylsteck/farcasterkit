// import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode } from 'react';
// import axios from 'axios';

// export interface FarcasterUser {
//   signer_uuid: string;
//   public_key: string;
//   status: string;
//   signer_approval_url?: string;
//   fid?: number;
// }

// interface NeynarContextProps {
//   farcasterUser: FarcasterUser | null;
//   setFarcasterUser: React.Dispatch<React.SetStateAction<FarcasterUser | null>>;
//   handleSignIn: () => Promise<void>;
//   loading: boolean;
//   handleCast: (castText: string) => Promise<void>;
//   isCasting: boolean;
// }

// const NeynarContext = createContext<NeynarContextProps | undefined>(undefined);

// export const useNeynar = (): NeynarContextProps => {
//   const context = useContext(NeynarContext);
//   if (!context) {
//     throw new Error('useNeynar must be used within a NeynarProvider');
//   }
//   return context;
// };

// export const useCastPost = (): Pick<NeynarContextProps, 'handleCast' | 'isCasting'> => {
//   const context = useContext(NeynarContext);
//   if (!context) {
//     throw new Error('useCastPost must be used within a NeynarProvider');
//   }
//   return { handleCast: context.handleCast, isCasting: context.isCasting };
// };

// interface NeynarProviderProps {
//   children: ReactNode;
// }

// export const NeynarProvider: React.FC<NeynarProviderProps> = ({ children }) => {
//   const [farcasterUser, setFarcasterUser] = useState<FarcasterUser | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [isCasting, setIsCasting] = useState(false);

//   const handleSignIn = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/signer');
//       if (response.status === 200) {
//         setFarcasterUser(response.data);
//       }
//     } catch (error) {
//       console.error('API Call failed', error);
//     }
//     setLoading(false);
//   }, []);

//   const handleCast = useCallback(async (castText: string) => {
//     setIsCasting(true);
//     try {
//       await axios.post('/api/cast', {
//         text: castText,
//         signer_uuid: farcasterUser?.signer_uuid,
//       });
//     } catch (error) {
//       console.error('Could not send the cast', error);
//     }
//     setIsCasting(false);
//   }, [farcasterUser]);

//   useEffect(() => {
//     if (farcasterUser && farcasterUser.status === 'pending_approval') {
//       const intervalId = setInterval(async () => {
//         try {
//           const response = await axios.get(`/api/signer?signer_uuid=${farcasterUser.signer_uuid}`);
//           const updatedUser = response.data as FarcasterUser;
//           if (updatedUser?.status === 'approved') {
//             setFarcasterUser(updatedUser);
//             clearInterval(intervalId);
//           }
//         } catch (error) {
//           console.error('Error during polling', error);
//         }
//       }, 2000);

//       return () => clearInterval(intervalId);
//     }
//   }, [farcasterUser]);

//   return (
//     <NeynarContext.Provider value={{ farcasterUser, setFarcasterUser, handleSignIn, loading, handleCast, isCasting }}>
//       {children}
//     </NeynarContext.Provider>
//   );
// };

import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { NeynarAPIClient } from '@neynar/nodejs-sdk';
import { FeedType, FilterType, FeedResponse } from '@neynar/nodejs-sdk/build/neynar-api/v2';

export interface FarcasterUser {
  signer_uuid: string;
  public_key: string;
  status: string;
  signer_approval_url?: string;
  fid?: number;
}

interface NeynarContextProps {
  farcasterUser: FarcasterUser | null;
  setFarcasterUser: React.Dispatch<React.SetStateAction<FarcasterUser | null>>;
  handleSignIn: () => Promise<void>;
  loading: boolean;
  handleCast: (castText: string) => Promise<void>;
  isCasting: boolean;
  feedResponse: FeedResponse | null;
  feedLoading: boolean;
  fetchFeed: (filterType: 'parent_url' | 'global_trending', limit: number, parentUrl?: string) => Promise<void>;
}

const NeynarContext = createContext<NeynarContextProps | undefined>(undefined);

export const useLogin = (): Pick<NeynarContextProps, 'farcasterUser' | 'setFarcasterUser' | 'handleSignIn' | 'loading'> => {
  const context = useContext(NeynarContext);
  if (!context) {
    throw new Error('useLogin must be used within a NeynarProvider');
  }
  return context;
};

export const usePostCast = (): Pick<NeynarContextProps, 'handleCast' | 'isCasting'> => {
  const context = useContext(NeynarContext);
  if (!context) {
    throw new Error('usePostCast must be used within a NeynarProvider');
  }
  return context;
};

export const useFeed = (filterType: 'parent_url' | 'global_trending', limit = 10, parentUrl?: string): { feedResponse: FeedResponse | null, feedLoading: boolean } => {
  const { feedResponse, feedLoading, fetchFeed } = useContext(NeynarContext) || { feedResponse: null, feedLoading: false, fetchFeed: () => {} };
  
  useEffect(() => {
    fetchFeed(filterType, 30, parentUrl);
  }, [parentUrl, limit, fetchFeed, filterType]);

  return { feedResponse, feedLoading };
};

export const NeynarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [farcasterUser, setFarcasterUser] = useState<FarcasterUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [isCasting, setIsCasting] = useState(false);
  const [feedResponse, setFeedResponse] = useState<FeedResponse | null>(null);
  const [feedLoading, setFeedLoading] = useState(false);

  const handleSignIn = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/signer');
      if (response.status === 200) {
        setFarcasterUser(response.data);
      }
    } catch (error) {
      console.error('API Call failed', error);
    }
    setLoading(false);
  }, []);

  const handleCast = useCallback(async (castText: string) => {
    setIsCasting(true);
    try {
      await axios.post('/api/cast', {
        text: castText,
        signer_uuid: farcasterUser?.signer_uuid,
      });
    } catch (error) {
      console.error('Could not send the cast', error);
    }
    setIsCasting(false);
  }, [farcasterUser]);

  const fetchFeed = useCallback(async (filterType: 'parent_url' | 'global_trending', limit: number, parentUrl?: string) => {
    setFeedLoading(true);
    const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY as string);
    try {
      const result = await client.fetchFeed(FeedType.Filter, {
        filterType: filterType === 'parent_url' ? FilterType.ParentUrl : FilterType.GlobalTrending,
        parentUrl: parentUrl,
        limit: limit,
      });
      setFeedResponse(result);
    } catch (error) {
      console.error('Error fetching feed:', error);
    }
    setFeedLoading(false);
  }, []);

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
  }, [farcasterUser]);

  return (
    <NeynarContext.Provider value={{ farcasterUser, setFarcasterUser, handleSignIn, loading, handleCast, isCasting, feedResponse, feedLoading, fetchFeed }}>
      {children}
    </NeynarContext.Provider>
  );
};