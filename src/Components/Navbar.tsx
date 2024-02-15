import Selectbox from './Selectbox'

export default function Navbar() {
  return (
    <header className="flex items-center top-0 left-0 right-0 bg-blue-600 z-10 shadow-2xl px-10 h-20 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-lg font-bold text-white ">REST Countries</p>
        <Selectbox />
      </div>
    </header>
  )
}
