# farcaster kit

![farcaster kit og:image](https://i.imgur.com/wBGSE0g.png)

the easiest way to build farcaster apps -- [view docs](https://farcasterkit.com/docs)

farcaster kit is made up of two parts:
1. a rest api to access app-first data
2. a npm package with react hooks and modules

using farcaster kit is free up to 2,000 requests/week. request an api key here <br/>
otherwise you can run our api, which uses the official farcaster indexer

### what's in the box?
- ✅ rest api
- ✅ react hooks
- ✅ built in modules
- ✅ app-first feeds
- ✅ historic data
- ✅ hub support
- ✅ auth hooks with viem
- ✅ warpcast channels module
- ✅ signups component

### how this repo is structured
- `packages/react` - react hooks and modules, which are available to install with `npm install farcasterkit/react`
- `apps/api` - the rest api for farcaster kit
- `apps/web` - the homepage and docs for farcaster kit, which you can [view here](https://farcasterkit.com)
- `apps/old-replicator` -- the postgres replicator powering farcaster kit, built by farcaster. a migration to the [new replicator](https://github.com/farcasterxyz/hub-monorepo/tree/main/apps/replicator) will happen soon!

<br/>

built by [dylsteck](https://github.com/dylsteck) and powered by [nexus](https://withcortex.com)

----