import { SNAPCHAIN_BASE_URL } from '../constants/contracts';

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string = SNAPCHAIN_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(endpoint, this.baseUrl);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }
}

export function createHttpClient(baseUrl?: string): HttpClient {
  return new HttpClient(baseUrl);
}



