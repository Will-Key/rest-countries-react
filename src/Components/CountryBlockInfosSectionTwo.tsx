import { Country } from '../types'

type PROPS = {
  country?: Country
}

export default function CountryBlockInfosSectionTwo({ country }: PROPS) {
  return (
    <div>
      <p className="my-4">
        <span className="font-semibold text-base">Top Level Domain: </span>
        {country?.topLevelDomain}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Currencies: </span>
        {country?.currencies?.map((curr) => curr.name).join()}
      </p>
      <p className="my-4">
        <span className="font-semibold text-base">Languages: </span>
        {country?.languages?.map((lang) => lang.name).join()}
      </p>
    </div>
  )
}
