# Farcasterkit

**A unified Typescript API for Farcaster Data**

You need to get Farcaster data and need to read all API documentations and even more. Farcasterkit solves this by offering a one stop library that exposes a unified API so you don't need to worry about different implementations (think viem/ethers.js providers but for Farcaster).

## Installation

```bash
npm install @dtechvision/farcasterkit
```

## Ressources

- [NPM]- TODO
- [React Hooks] - SOON
- [Farcaster Channel] - Whut? wow!
- [Docs] - SOON, for now github Issues
- [Looking for Developers? / need Help?] - cast @samuellhuber or any Maintainer on Farcaster for now

## Overview

## Providers

## Contributing

If you offer data APIs that you'd wish to be included please refer to [Contributing - Adding Providers](#adding-providers)

### Feedback & Ideas (non devs welcome!)

### Code

### Adding Providers

Have a look at `src/providers/thirdpartyProvider.ts` which is a template for adding new Providers.

Then register your Provider class with a  `nameProvider.ts` file in `src/providers/thirdparty/` with creation of your class.

your file needs to export a Provider that extens the ThirdPartyProvider like the following code sample

```typescript
export class NameProvider extends ThirdParty {
    // add constructor to init your values
    // like an API key etc ...
}
```
