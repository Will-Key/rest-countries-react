import CountriesList from '../Components/CoutriesList'
import Filter from '../Components/Filter'
import Navbar from '../Components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mt-28 ml-10 mr-10 mb-10 flex flex-col gap-6">
        <Filter />
        <CountriesList />
      </div>
    </div>
  )
}
