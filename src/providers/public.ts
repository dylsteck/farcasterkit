import { HubProvider } from './class';

// Example usage for a predefined provider
// const provider = new PublicProvider();
// to use the public Pinata Farcaster Hub
// const provider = new PublicProvider("pinata");
// to use with PostgreSQL Replicator at https://replicator.yourdomain.com
// const provider = new PublicProvider("pinata", "https://replicator.yourdomain.com");

export class PublicProvider extends HubProvider {
    /**
     * Default Provider using only free, public Offerings anyone can use!
     * @param providerType decide which public Hub to use. Defaults to Warpcast offering
     * @param psqlUrl optional: the PostgreSQL Replicator URL to use. Defaults to undefined
     */
  constructor(providerType: string = 'farcaster', psqlUrl?: string) {
    let hubUrl: string;
    let name: string;

    if (providerType === 'pinata') {
      hubUrl = 'hub.pinata.cloud/v1/';
      name = 'publicPinataHub';
    } else {
      hubUrl = 'nemes.farcaster.xyz:2283';
      name = 'publicFarcasterHub';
    }
    //no psqlUrl since there is no public PostgreSQL Replicator instance
    super(name, hubUrl, psqlUrl);
  }
}

