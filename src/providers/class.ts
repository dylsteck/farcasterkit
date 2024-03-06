export class Provider {
  name: string;
  /**
   * Generic base Provider Class, don't use directly!
   * @param name the custom name of the provider. useful for debugging output
   */
  constructor(name: string) {
    this.name = name;
  }
}
  
export class HubProvider extends Provider {
  hubUrl: string;
  psqlUrl: string | undefined;
  /**
   * HubProvider for getting Data with Farcaster Hubs and optional PostgreSQL Replicator
   * @param name the custom name of the provider. useful for debugging output
   * @param hubUrl the Farcaster Hub URL to use
   * @param psqlUrl optional: the PostgreSQL Replicator URL to use. Defaults to undefined
   */
  constructor(name: string, hubUrl: string, psqlUrl?: string) {
    super(name);

    this.hubUrl = hubUrl;
    this.psqlUrl = psqlUrl;
  }
}
  
export class ThirdParty extends Provider {
  apiKey: string;
  endPoint: string;

  /**
   * ThirdParty Provider for getting Data with any ThirdParty API provider that doesn't just offer a Hub/Replicator Endpoint
   * @param apiKey Provider API Key to use. Please do not hardcode this! Use .env or other
   * @param endPoint the Provider API endpoint to use
   */
  constructor(name: string, apiKey: string, endPoint: string) {
      super(name);
      this.apiKey = apiKey;
      this.endPoint = endPoint;
  }
}