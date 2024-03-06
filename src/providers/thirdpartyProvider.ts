import { ThirdParty } from "./class";

/**
 * 
 * NOTE: This implementation is a sample and will lead to unimplemented Errors with FarcasterKit Providers!
 *       The only exception to this is functions that require only Hubs as there we fall back to the public Provider.
 *       For Farcaster API providers who wish to offer the API to FarcasterKit developers please open a PullRequest/Issue
 *       https://github.com/dtechvision/farcasterkit/
 * 
 */

export class ThirdPartyProvider extends ThirdParty {
    /**
     * Custom Third Party Provider for getting Data with custom APIs
     * @param providerType name the type of provider you are creating
     * @param apiKey the API Key to use with your API Endpoint if required
     * @param endPoint your custom API Endpoint that should be used
     */
    constructor(providerType: string, apiKey: string, endPoint: string) {
        if (!endPoint) {
            throw new Error("Endpoint must be provided for custom provider type");
        } 
        if(!providerType) {
            throw new Error('Provider type must be provided for custom provider type');
        }

        super(providerType, apiKey, endPoint);
    }
}

/****************************************
 * all registered third party providers *
 ****************************************/

export * from './thirdparty/neynarProvider';
