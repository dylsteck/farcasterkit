import {
  useGlobalRank,
  useUserGlobalRank,
  usePersonalizedNeighbors,
  usePersonalizedNeighborsByAddresses,
  useHandlesByAddresses,
  useAddressesByHandles,
} from '../../../../packages/farcasterkit/index';

const EXAMPLE_HANDLE = "dylsteck.eth";
const EXAMPLE_ADDRESSES = ["0x8fc5d6afe572fefc4ec153587b63ce543f6fa2ea", "0x4114e33eb831858649ea3702e1c9a2db3f626446"];

export default function DemoComponent() {
  const { ranks, isLoading } = useGlobalRank({ strategy: "activity" });
  const { rank, isLoading: isLoadingUserRank } = useUserGlobalRank({ strategy: 'activity', username: EXAMPLE_HANDLE });
  const { neighbors, isLoading: isLoadingNeighbors } = usePersonalizedNeighbors({ handles: [EXAMPLE_HANDLE, "v"], withoutRankScore: false });
  const { neighbors: neighborsFollowing, isLoading: isLoadingNeighborsFollowing } = usePersonalizedNeighbors({ handles: [EXAMPLE_HANDLE, "v"], withoutRankScore: false, strategy: 'following' });
  const { neighbors: neighborsFollowingByAddress, isLoading: isLoadingNeighborsFollowingByAddress } = usePersonalizedNeighborsByAddresses({ addresses: EXAMPLE_ADDRESSES, withoutRankScore: false, strategy: 'following' });
  const { accounts, isLoading: isLoadingGetHandles } = useHandlesByAddresses({ addresses: EXAMPLE_ADDRESSES });
  const { accounts: accountsByAddr, isLoading: isLoadingGetAddresses } = useAddressesByHandles({ handles: [EXAMPLE_HANDLE, "v"] });

  return (
    <main className="flex min-h-screen flex-col space-y-4 justify-between p-24">
      <div>
        <span className='text-xl font-bold'>useUserGlobalRank for {EXAMPLE_HANDLE}</span>
        {isLoadingUserRank && <div>loading...</div>}
        {!isLoadingUserRank && <div>rank: {rank} </div>}
      </div>

      <div>
        <span className='text-xl font-bold'>useGlobalRank</span>
        {isLoading && <div>loading...</div>}
        {ranks.map((a) => {
          return (
            <div key={a.id} className='mb-4'>
              <span>rank: {a.rank}, username: {a.username}, value: {a.value} fid: {a.id}, followers: {a.followers}, following: {a.following}, likes: {a.likes}, replies: {a.replies}, recasts: {a.recasts}, mentions: {a.mentions}</span>
            </div>
          )
        })}
      </div>

      <div>
        <span className='text-xl font-bold'>usePersonalizedNeighbors - for handles (dylsteck.eth, v) - based on engagement</span>
        {isLoadingNeighbors && <div>loading...</div>}
        {neighbors.map((a) => {
          return (
            <div key={a.address} className='mb-4'>
              <span>address: {a.address}, fname: {a.fname}, username: {a.username} {a.score && `score: ${a.score}`}</span>
            </div>
          )
        })}
      </div>
      <div>
        <span className='text-xl font-bold'>usePersonalizedNeighbors - for handles (dylsteck.eth, v) - based on following</span>
        {isLoadingNeighborsFollowing && <div>loading...</div>}
        {neighborsFollowing.map((a) => {
          return (
            <div key={a.address} className='mb-4'>
              <span>address: {a.address}, fname: {a.fname}, username: {a.username} {a.score && `score: ${a.score}`}</span>
            </div>
          )
        })}
      </div>
      <div>
        <span className='text-xl font-bold'>usePersonalizedNeighborsByAddresses - for addresses (0x8fc5d6afe572fefc4ec153587b63ce543f6fa2ea, 0x4114e33eb831858649ea3702e1c9a2db3f626446) - based on following</span>
        {isLoadingNeighborsFollowingByAddress && <div>loading...</div>}
        {neighborsFollowingByAddress.map((a) => {
          return (
            <div key={a.address} className='mb-4'>
              <span>address: {a.address}, username: {a.username} {a.score && `score: ${a.score}`}</span>
            </div>
          )
        })}
      </div>
      <div>
        <span className='text-xl font-bold'>useHandlesByAddresses - for addresses (0x8fc5d6afe572fefc4ec153587b63ce543f6fa2ea, 0x4114e33eb831858649ea3702e1c9a2db3f626446)</span>
        {isLoadingGetHandles && <div>loading...</div>}
        {accounts.map((a) => {
          return (
            <div key={a.address} className='mb-4'>
              <span>address: {a.address}, fname: {a.fname}, username: {a.username}</span>
            </div>
          )
        })}
      </div>
      <div>
        <span className='text-xl font-bold'>useAddressesByHandles - for addresses (dylsteck.eth, v)</span>
        {isLoadingGetAddresses && <div>loading...</div>}
        {accountsByAddr.map((a) => {
          return (
            <div key={a.address} className='mb-4'>
              <span>address: {a.address}, fname: {a.fname}, username: {a.username}</span>
            </div>
          )
        })}
      </div>
    </main>
  );
}