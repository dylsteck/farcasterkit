# farcaster kit

react hooks for the best farcaster apps -- [view docs](https://farcasterkit.com/docs)

### todos for the `auth` branch
note: right now the `auth` branch has housed all my latest changes, which have mostly been around auth. listed below is everthing i'm trying to finish before cleaing the branch up and merging it in <br/> ^ this really should be v1.0, but I'll worry about the versioning once everything is done
- **auth**
  - [ ] wrap up `examples/auth/with-neynar` and move the `NeynarProvider` as well as components directly to Farcaster Kit's package in `packages/farcasterkit`
  - [ ] also in `examples/auth` - wrap up either `with-dynamic`, `with-privy`, or `with-rainbowkit`
    - each lets the user _create a FC account with a wallet_, the component/providers just need to be cleaned then added to `packages/farcasterkit` before the wallet-specific examples can get edited
  - [ ] create a subsequent component/edit the `FarcasterKitProvider` in `packages/farcasterkit` to allow a user to log in & _create a signer_ with their wallet
  - [ ] wrap up `examples/auth/with-auth-kit` and add the component/provider edits to `packages/farcasterkit`
- **api**
    - [ ] add writes
    - [ ] add read endpoints & schema that are similar or at parity to the old Warpcast APIs
        - some of this will require writing materialized views over the `old-replicator`
    - [ ] add new channels
        - need to figure out the best way to get the channel data that isn't permissionless and only lives in Warpcast
- **misc.**
    - [ ] finish the new website at `apps/web`
        - the new design is there, i've just been waiting to finish these changes so i can document them on the site
    - [ ] write & add styled components to storybook in `packages/components`
    - [ ] potentially make some edits to `examples/starter` to showcase more of what the new changes do?
    - [ ] edit `packages/create-farcaster-app` to allow the user to select [litecast](https://github.com/dylsteck/litecast)
    - [ ] add linting, changelog, and other small setup configs to the monorepo


----
![farcaster kit og:image](https://i.imgur.com/qajaZLU.png)

farcaster kit is made up of two parts:
1. react hooks and modules to build the best farcaster apps
2. a rest api to fetch data with or without the hooks

### what's in the box?
- ✅ rest api
- ✅ read features
- ✅ channels module
- ✅ app-first feeds
- ✅ historic data
- ✅ user pages
- 🔜 auth hooks
- 🔜 write actions
- 🔜 multi package/provider support

### how this repo is structured
- `packages/farcasterkit` - react hooks and modules, which are available to install with `npm install farcasterkit`
- `packages/create-farcaster-app` - a CLI tool to scaffold an app using `npx create-farcaster-app`, which lives at `examples/starter`
- `apps/api` - the rest api for farcaster kit
- `apps/web` - the homepage and docs for farcaster kit, which you can [view here](https://farcasterkit.com)
- `apps/old-replicator` -- the postgres replicator powering farcaster kit, built by farcaster. a migration to the [new replicator](https://github.com/farcasterxyz/hub-monorepo/tree/main/apps/replicator) will happen soon!
- `examples/starter` - a starter app which you can scaffold by using `npx create-farcaster-app`
<br/>

built by [dylsteck](https://github.com/dylsteck) and powered by [nexus](https://withcortex.com)

----