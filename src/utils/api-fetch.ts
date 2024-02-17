const url = 'https://restcountries.com/v2/'

type PROPS = {
  urlPath: string
}

export async function apiFetch<T>({ urlPath = 'all' }: PROPS): Promise<T> {
  const r = await fetch(`${url}/${urlPath}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  })

  if (r.ok) {
    return r.json() as Promise<T>
  }
  throw new ApiError(r.status, await r.json())
}

class ApiError extends Error {
  constructor(public status: number, public data: Record<string, unknown>) {
    super()
  }
}
