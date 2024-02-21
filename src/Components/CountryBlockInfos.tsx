import { Country } from '../types'
import CountryBlockInfosBorders from './CountryBlockInfosBorders'
import CountryBlockInfosSectionOne from './CountryBlockInfosSectionOne'
import CountryBlockInfosSectionTwo from './CountryBlockInfosSectionTwo'

type PROPS = {
  country?: Country
}

export default function CountryBlockInfos({ country }: PROPS) {
  return (
    <div className="flex flex-col">
      <h2 className="my-4 font-bold text-4xl">{country?.name}</h2>
      <div className="flex flex-col md:flex-row gap-36">
        <CountryBlockInfosSectionOne country={country} />
        <CountryBlockInfosSectionTwo country={country} />
      </div>
      <CountryBlockInfosBorders borders={country?.borders} />
    </div>
  )
}
