import CountriesList from '../Components/CoutriesList'
import Filter from '../Components/Filter'
import Navbar from '../Components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="m-10 flex flex-col gap-6">
        <Filter />
        <CountriesList />
      </div>
    </div>
  )
}
