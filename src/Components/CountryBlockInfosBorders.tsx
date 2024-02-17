import { Link } from 'react-router-dom'

export default function CountryBlockInfosBorders() {
  return (
    <div className="mt-10">
      <span className="my-4 mr-4 font-semibold text-base">
        Border Countries:{' '}
      </span>
      {[1, 2, 3, 4, 5, 1, 3, 5].map((_) => (
        <Link
          to="/ghana"
          className="inline-block mr-4 my-1 px-4 py-1.5 shadow-md">
          Burkina Faso
        </Link>
      ))}
    </div>
  )
}
