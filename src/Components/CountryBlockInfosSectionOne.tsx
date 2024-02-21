import { Country } from '../types'

type PROPS = {
  country?: Country
}

export default function CountryBlockInfosSectionOne({ country }: PROPS) {
  return (
    <div>
      <p className="my-4">
        <span className="font-semibold text-base">Native Name: </span>
        {country?.nativeName}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Population: </span>
        {country?.population}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Region: </span>
        {country?.region}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Sub Region: </span>
        {country?.subregion}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Capital: </span>
        {country?.capital}
      </p>
    </div>
  )
}
