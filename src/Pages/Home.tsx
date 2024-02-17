import CountriesList from '../Components/CoutriesList'
import Filter from '../Components/Filter'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <Filter />
      <CountriesList />
    </div>
  )
}
