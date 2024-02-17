import CountryBlockInfosBorders from './CountryBlockInfosBorders'
import CountryBlockInfosSectionOne from './CountryBlockInfosSectionOne'
import CountryBlockInfosSectionTwo from './CountryBlockInfosSectionTwo'

export default function CountryBlockInfos() {
  return (
    <div className="flex flex-col">
      <h2 className="my-4 font-bold text-4xl">Ivory Coast</h2>
      <div className="flex flex-col md:flex-row gap-36">
        <CountryBlockInfosSectionOne />
        <CountryBlockInfosSectionTwo />
      </div>
      <CountryBlockInfosBorders />
    </div>
  )
}
