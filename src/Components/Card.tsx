import { Link } from 'react-router-dom'

type Country = {
  name: {
    common: string
    official: string
  }
  capital: string[]
  population: number
  timezones: string[]
  region: string
  subregion: string
  continents: string[]
  languages: { [key: string]: string }
  flags: { png: string; svg: string; alt: string }
}

type PROPS = {
  country: Country
}

export default function Card(props: PROPS) {
  // ${props.country.name.common}
  // transition-transform duration-300 transform hover:scale-110
  return (
    <Link
      to={`/senegal`}
      className="bg-white w-full shadow-lg transform duration-300 hover:-translate-y-3 hover:cursor-pointer">
      <div className="w-full">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAACVBMVEX3fwD///8AnmBWUWjSAAAAoUlEQVR4nO3PMQEAAAgDoGn/0IZwJzQg6Zme7SkGDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDR8OvdOD1wQ8tBkAAAAASUVORK5CYII="
          width={'100%'}
          alt=""
          className="rounded-t-lg border-2"
        />
      </div>
      <div className="my-4 px-4">
        <p className="font-bold text-lg my-5">Côte d'Ivoire</p>
        <p>
          <span className="text-md font-semibold">Population: </span>
          <span className="text-md">28.000.000</span>
        </p>
        <p>
          <span className="text-md font-semibold">Region: </span>
          <span className="text-md">Africa</span>
        </p>
        <p>
          <span className="text-md font-semibold">Capital: </span>
          <span className="text-md">Yamoussoukro</span>
        </p>
      </div>
    </Link>
  )
}
