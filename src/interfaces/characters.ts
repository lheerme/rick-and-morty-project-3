export interface Characters {
  info: Info
  results: Result[]
}

interface Info {
  count: number
  pages: number
  next: string
  prev: string | null
}

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

interface Origin {
  name: string
  url: string
}

interface Location {
  name: string
  url: string
}
