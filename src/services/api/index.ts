interface Options extends RequestInit {
  url?:string,
}

class Api {
  #URL:string;
  #cleanReq :boolean;

  constructor(baseUrl = '', cleanReq = false) {
    this.#URL = baseUrl;
    this.#cleanReq = cleanReq;
  }

  public get<T>({ url, headers }:Options) {
    return this.#configureRequest<T>({
      url, headers
    });
  }

  public post<T>({ url, body, headers }:Options) {
    return this.#configureRequest<T>({
      url,
      body,
      method: 'post',
      headers
    });
  }

  #configureRequest<T>({
    url = '',
    method = 'get',
    body,
    headers = {}
  }:Options):Promise<T> {
    const URL = `${this.#cleanReq ? this.#URL : (process.env.EXPO_PUBLIC_API_URL ?? '')}${this.#URL
    }${url}`;

    const options:RequestInit = {
      method,
      headers: {
        'content-type': 'application/json',
        ...headers
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(URL, options)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json() as T;
      });
  }
}

export default Api;
