export type Country = {
  name: string
  nativeName: string
  topLevelDomain: string[]
  capital: string
  subregion: string
  region: string
  population: number
  borders: string[]
  flag: string
  languages: {
    name: string
  }
}
