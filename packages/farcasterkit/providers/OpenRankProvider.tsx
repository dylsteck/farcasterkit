import React from 'react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Please refer to https://graph.cast.k3l.io/docs# for details

type OpenRankProviderProps = {
  baseURL?: string;
  children: ReactNode;
  APIKey: string;
}

type OpenRankContextType = {
  baseURL: string;
  APIKey: string;
}

export type GetGlobalRanksParams = {
  strategy?: 'follows' | 'engagement' | 'activity' | 'og_circles' | 'og_engagement' | 'og_activity';
  limit?: number;
  offset?: number;
}

export type GetUserGlobalRankParams = {
  strategy?: 'follows' | 'engagement' | 'activity' | 'og_circles' | 'og_engagement' | 'og_activity';
  username: string;
}

export type PersonalizedNeighborsParams = {
  strategy?: 'following' | 'engagement',
  handles: string[];
  withoutRankScore: boolean,
  k?: number,
  limit?: number,
}

export type PersonalizedNeighborsByAddressesParams = {
  strategy?: 'following' | 'engagement',
  addresses: string[];
  withoutRankScore: boolean,
  k?: number,
  limit?: number,
}


export type Rank = {
  id: string;
  username: string;
  value: number;
  rank: string;
  following: string;
  followers: string;
  likes: string;
  replies: string;
  recasts: string;
  mentions: string;
}

export type RankIndexResponse = {
  rank: string;
}

export type Neighbor = {
  address: string;
  fname: string;
  username: string;
  score?: number,
}

export type PersonalizedNeighborResponse = {
  result: Neighbor[];
}


const OpenRankContext = createContext<OpenRankContextType | undefined>(undefined);

export const OpenRankProvider: React.FC<OpenRankProviderProps> = ({ baseURL = 'https://api.farcasterkit.com', APIKey, children }) => {
  return <OpenRankContext.Provider value={{ baseURL, APIKey }}>{children}</OpenRankContext.Provider>;
};

export const useGlobalRank = (queryParams?: GetGlobalRanksParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('useGlobalRank must be used within a OpenRankProvider');
  }

  const { baseURL } = context;
  const [ranks, setRanks] = useState<Rank[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      try {
        const response = await axios.post(`${baseURL}/openrank/rankings`, { ...queryParams }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.APIKey || ''}`
          }
        });
        const responseData = response.data as Rank[];
        if (isMounted) {
          setRanks(responseData || []);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { ranks, isLoading };
};

export const useUserGlobalRank = (queryParams?: GetUserGlobalRankParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('useUserGlobalRank must be used within a OpenRankProvider');
  }

  const { baseURL } = context;
  const [rank, setRank] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      try {
        const response = await axios.post(`${baseURL}/openrank/ranking_index`, { ...queryParams }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.APIKey || ''}`
          }
        });
        const responseData = response.data as RankIndexResponse;
        if (isMounted) {
          setRank(Number(responseData.rank) || 0);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { rank, isLoading };
};

export const usePersonalizedNeighbors = (queryParams?: PersonalizedNeighborsParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('usePersonalizedNeighbors must be used within a OpenRankProvider');
  }

  if (!queryParams?.handles || queryParams.handles && queryParams.handles.length == 0) {
    throw new Error('handles must be set');
  }

  const { baseURL } = context;
  const [neighbors, setNeighbors] = useState<Neighbor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      let url = `${baseURL}/openrank/scores/personalized`;
      if (queryParams.withoutRankScore) {
        url = `${baseURL}/openrank/graph/neighbors`;
      }
      if (queryParams.strategy) {
        url = `${url}/${queryParams.strategy}/handles`;
      } else {
        url = `${url}/engagement/handles`;
      }

      try {
        const response = await axios.post(url, { ...queryParams }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.APIKey || ''}`
          }
        });
        const responseData = response.data as PersonalizedNeighborResponse;
        if (isMounted) {
          setNeighbors(responseData.result);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { neighbors, isLoading };
};

export const usePersonalizedNeighborsByAddresses = (queryParams?: PersonalizedNeighborsByAddressesParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('usePersonalizedNeighbors must be used within a OpenRankProvider');
  }

  if (!queryParams?.addresses || queryParams.addresses && queryParams.addresses.length == 0) {
    throw new Error('addresses must be set');
  }

  const { baseURL } = context;
  const [neighbors, setNeighbors] = useState<Neighbor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      let url = `${baseURL}/openrank/scores/personalized`;
      if (queryParams.withoutRankScore) {
        url = `${baseURL}/openrank/graph/neighbors`;
      }
      if (queryParams.strategy) {
        url = `${url}/${queryParams.strategy}/addresses`;
      } else {
        url = `${url}/engagement/addresses`;
      }

      try {
        const response = await axios.post(url, { ...queryParams }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.APIKey || ''}`
          }
        });
        const responseData = response.data as PersonalizedNeighborResponse;
        if (isMounted) {
          setNeighbors(responseData.result);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { neighbors, isLoading };
};

type HandlesByAddressesParams = {
  addresses: string[]
};

export const useHandlesByAddresses = (queryParams?: HandlesByAddressesParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('usePersonalizedNeighbors must be used within a OpenRankProvider');
  }

  if (!queryParams?.addresses || queryParams.addresses && queryParams.addresses.length == 0) {
    throw new Error('addresses must be set');
  }

  const { baseURL } = context;
  const [neighbors, setNeighbors] = useState<Neighbor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      const url = `${baseURL}/openrank/metadata/handles`;

      try {
        const response = await axios.post(url, queryParams.addresses);
        const responseData = response.data as PersonalizedNeighborResponse;
        if (isMounted) {
          setNeighbors(responseData.result || []);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { accounts: neighbors, isLoading };
};

type AddressesByHandlesParams = {
  handles: string[]
};

export const useAddressesByHandles = (queryParams?: AddressesByHandlesParams) => {
  const context = useContext(OpenRankContext);

  if (context === undefined) {
    throw new Error('usePersonalizedNeighbors must be used within a OpenRankProvider');
  }

  if (!queryParams?.handles || queryParams.handles && queryParams.handles.length == 0) {
    throw new Error('handles must be set');
  }

  const { baseURL } = context;
  const [neighbors, setNeighbors] = useState<Neighbor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) setIsLoading(true);

      const url = `${baseURL}/openrank/metadata/addresses`;

      try {
        const response = await axios.post(url, queryParams.handles);
        const responseData = response.data as PersonalizedNeighborResponse;
        if (isMounted) {
          setNeighbors(responseData.result || []);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching latest casts:', error);
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((err) => {
      console.log('error', err);
    });

    return () => {
      isMounted = false;
    };
  }, [baseURL, JSON.stringify(queryParams)]);

  return { accounts: neighbors, isLoading };
};
