const root = `http://localhost:3001/api`;

async function parseResponse<T>(response: Response): Promise<T> {
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  return Promise.reject(json);
}

interface Data<B> {
  url: string;
  method: string;
  body?: B;
}

export async function api<B, R>(data: Data<B>): Promise<R> {
  const { url, method, body } = data;
  const response = await fetch(root + url, {
    credentials: 'same-origin',
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await parseResponse(response);
}
