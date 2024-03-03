import { HubProvider } from "./class";


export class PublicProvider extends HubProvider {
    constructor(name: string, providerType: string) {
      let hubUrl: string;
      if (providerType === "pinata") {
        hubUrl = "hub.pinata.cloud/v1/";
      } else if (providerType === "farcaster") {
        hubUrl = "nemes.farcaster.xyz:2283";
      } else {
        throw new Error("Invalid provider type");
      }
      super(name, hubUrl);

    }
  
    }
  // Example usage for a predefined provider
  // const provider = new PublicProvider ("pinata");