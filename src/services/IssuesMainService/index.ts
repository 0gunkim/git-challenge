import { HttpClient } from '../HttpClient';

export class IssuesService {
  private httpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  async get(pageNum: string) {
    try {
      const url = `issues?sort=comments&page=${pageNum}`;
      const response = await this.httpClient.fetch(url);
      return response.json();
    } catch (error) {
      throw new Error(`[api get issues]: ${error} `);
    }
  }
  async detailGet(issuesNumber: string) {
    try {
      const url = issuesNumber && `issues/${issuesNumber}`;
      const response = await this.httpClient.fetch(url);
      return response.json();
    } catch (error) {
      throw new Error(`[api get detail issues]: ${error} `);
    }
  }
}
