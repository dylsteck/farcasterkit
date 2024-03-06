import { ThirdParty } from "./class";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";



export class NeynarProvider extends ThirdParty {
    constructor(apiKey: string) {
        super("neynar", apiKey, "https://api.neynar.com/v2/farcaster");
    }
    
    client() {
        return new NeynarAPIClient(this.apiKey);
}
}






export class ThirdPartyProvider extends ThirdParty {
    constructor(providerType: string, apiKey: string, endPoint?: string) {
        let finalEndPoint: string;

        if (providerType === "neynar") {
            finalEndPoint = endPoint || "https://api.neynar.com/v2/farcaster";
        } else if (providerType === "custom") {
            if (!endPoint) {
                throw new Error("Endpoint must be provided for custom provider type");
            }
            finalEndPoint = endPoint;
        } else {
            throw new Error("Invalid provider type");
        }

        super(providerType, apiKey, finalEndPoint);
    }
}

// Example usage for a predefined provider
// const neynarApiKey = "your_neynar_api_key"; // Replace with actual API key
// const neynarProvider = new ThirdPartyProvider("neynar", neynarApiKey);

// Example usage for a custom provider
// const customApiKey = "your_custom_api_key"; // Replace with actual API key
// const customEndPoint = "https://api.customprovider.com"; // Replace with actual endpoint
// const customProvider = new ThirdPartyProvider("custom", customApiKey, customEndPoint);


// Example usage for neynar provider
// const neynarApiKey = "your_neynar_api_key"; 
// const neynarProvider = new NeynarProvider(neynarApiKey);
// console.log(neynarProvider);