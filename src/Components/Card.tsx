import { Link } from 'react-router-dom'
import { Country } from '../types'

type PROPS = {
  country: Country
}

export default function Card({ country }: PROPS) {
  return (
    <Link to={`/${country.name}`}>
      <div className="w-full h-48 max-h-48">
        <img
          src={country.flag}
          alt={country.name}
          className="rounded-t-lg border-2 object-cover w-full h-full"
        />
      </div>
      <div className="my-4 px-4">
        <p className="font-bold text-lg my-5">{country.name}</p>
        <p>
          <span className="text-md font-semibold">Population: </span>
          <span className="text-md">{country.population}</span>
        </p>
        <p>
          <span className="text-md font-semibold">Region: </span>
          <span className="text-md">{country.region}</span>
        </p>
        <p>
          <span className="text-md font-semibold">Capital: </span>
          <span className="text-md">{country.capital}</span>
        </p>
      </div>
    </Link>
  )
}
