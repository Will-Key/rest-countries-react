import Card from './Card'

export default function CountriesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
      {[1, 2, 3, 4, 5].map((_) => (
        <Card />
      ))}
    </div>
  )
}
