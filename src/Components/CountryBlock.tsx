import { Country } from '../types'
import CountryBlockImage from './CountryBlockImage'
import CountryBlockInfos from './CountryBlockInfos'

type PROPS = {
  country: Country
}

export default function CountryBlock() {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
      <CountryBlockImage />
      <CountryBlockInfos />
    </div>
  )
}
