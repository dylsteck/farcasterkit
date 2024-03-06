import { HubProvider } from './class';




export class PublicProvider extends HubProvider {
  constructor(name: string = 'farcaster', providerType: string = 'farcaster') {
    let hubUrl: string;
    if (providerType === 'pinata') {
      hubUrl = 'hub.pinata.cloud/v1/';
    } else {
      hubUrl = 'nemes.farcaster.xyz:2283';
    }
    super(name, hubUrl);
  }
}

// Example usage for a predefined provider
// const provider = new PublicProvider("farcaster");
// const provider = new PublicProvider("pinata");
// const provider = new PublicProvider();
