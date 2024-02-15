import Input from '../Components/Input'
import Navbar from '../Components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mt-6 mx-10 flex flex-row-reverse">
        <Input placeholder="Veuillez saisir le nom d'un pays" />
      </div>
    </div>
  )
}
