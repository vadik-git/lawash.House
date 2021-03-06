export class HttpService {
  fetchingService: any;
  baseUrl: string;
  apiPath: string;

  constructor(baseUrl: string, apiPath: string, axios: any) {
    this.baseUrl = baseUrl;
    this.apiPath = apiPath;
    this.fetchingService = axios;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiPath}/${url}`;
  };

  get(url: string) {
    return this.fetchingService.get(this.getFullApiUrl(url));
  };
  post(url: string, data: object | string) {    
    return this.fetchingService.post(this.getFullApiUrl(url), data);
  };
  put(url: string, data: object) {
    return this.fetchingService.put(this.getFullApiUrl(url), data);
  };
  delete(url: string) {
    return this.fetchingService.delete(this.getFullApiUrl(url));
  };
};
