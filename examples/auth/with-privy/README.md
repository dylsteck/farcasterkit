## auth/with-privy

Signup flow loosely based on [farcaster-signup-demo by @wojtekwtf](https://github.com/wojtekwtf/farcaster-signup-demo/tree/main)

### Steps:
- Sign in with wallet via Privy
- Set your recovery account(signature)
- Authorize app with the KeyGateway(signature)
- Write to the [Bundler](https://optimistic.etherscan.io/address/0x00000000fc04c910a0b5fea33b03e0447ad0b0aa) contract's `register` function, which registers the user and adds a signer and storage
    - note: *this is where I've been stuck for a while*
    - The auth and two signatures(set recovery address and authorize app) work well, but when I try to call the Bundler I get this error:
        - `Error: Cannot read properties of undefined (reading 'length')
Transaction Status: idle`
    - The code for this step lives in [src/components/Signup/CreateAccount.tsx](https://github.com/dylsteck/farcasterkit/blob/auth/examples/auth/with-privy/src/components/Signup/CreateAccount.tsx)
- (not yet implemented), after signup, you'd set the user's fname and use their signer to post casts to the network


### Short-term development goals
- [] get an unstyled version of signup working which saves the signer locally
    - very close! just need to fix the error writing to the Bundler contract
- [] Update the `FarcasterKitProvider` in the npm package with the changes in this repo, that way:
    - Devs can start using this right away!
    - I can properly style it(styles are ready in Figma, I just wanted to focus on implementation first to get this right)s
    - I can add support for other auth providers as well(which should be super easy)
- [] Add sign in support, but for connecting(traditional flow where you create a signer) and sign in(verifying a Farcaster user without a signer)