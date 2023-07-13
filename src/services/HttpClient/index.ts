export class HttpClient {
  private baseURL?: string;
  constructor(baseURL?: string) {
    this.baseURL = baseURL;
  }

  fetch(url: string) {
    return window.fetch(`${this.baseURL}${url}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer  ${process.env.REACT_APP_OCTOKIT_TOKEN}`,
      },
    });
  }
}
