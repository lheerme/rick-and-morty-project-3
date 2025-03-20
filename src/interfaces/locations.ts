export interface Locations {
  info: Info
  results: Result[]
}

interface Info {
  count: number
  pages: number
  next: string
  prev: string | null
}

interface Result {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
