import { ThirdParty } from "../class";

/*
 * Example usage for neynar provider
 * const neynarApiKey = process.env.NEYNAR_API_KEY || "your_neynar_api_key"; 
 * const neynarProvider = new NeynarProvider(neynarApiKey);
 */

export class NeynarProvider extends ThirdParty {
    /**
     * NeynarProvider for getting Data with neynar.com Farcaster APIs
     * @param apiKey Neynar API Key to use. Please do not hardcode this! Use .env or other
     * @param endPoint optional Neynar API endpoint, defaults to public Neynar V2. Custom endpoint is required to be Neynar API V2 compliant! 
     */
    constructor(apiKey: string, endPoint?: string) {
        if (endPoint) {
            super("neynar", apiKey, endPoint);
        } else {
            super("neynar", apiKey, "https://api.neynar.com/v2/farcaster");
        }
    }
}