import Filter from '../Components/Filter'
import Navbar from '../Components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mx-10 flex flex-row-reverse">
        <Filter />
      </div>
    </div>
  )
}
