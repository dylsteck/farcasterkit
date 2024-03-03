export class Provider {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
export class HubProvider extends Provider {
    hubUrl: string;
    constructor(name: string, hubUrl: string) {
      super(name);
      this.hubUrl = hubUrl;
    }
  }
  
export class ThirdParty extends Provider {
  apiKey: string;
  endPoint: string;

  constructor(name: string, apiKey: string, endPoint: string) {
      super(name);
      this.apiKey = apiKey;
      this.endPoint = endPoint;
  }
}