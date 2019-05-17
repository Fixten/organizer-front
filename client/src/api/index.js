const root = `http://localhost:3001/api`

const parseResponse = async response => {
  const json = await response.json()
  if (response.ok) {
    return json
  }
  return Promise.reject(json)
}

export const api = async data => {
  const { url, method, body } = data
  const response = await fetch(root + url, {
    credentials: 'same-origin',
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await parseResponse(response)
}
