import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../utils/api-fetch'
import { Country } from '../types'
import { AnimatePresence, motion } from 'framer-motion'

type PROPS = {
  borders?: string[]
}

export default function CountryBlockInfosBorders({ borders }: PROPS) {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    if (borders?.length) {
      apiFetch<Country[]>({ urlPath: `alpha?codes=${borders.join()}` }).then(
        (countries) => {
          return setCountries(countries)
        }
      )
    }
  }, [borders, countries])

  return (
    <div className="mt-10">
      <span className="my-4 mr-4 font-semibold text-base">
        Border Countries:
      </span>
      {countries.map((country) => (
        <AnimatePresence>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mr-4 my-1 px-4 py-1.5 shadow-md">
            <Link key={country.name} to={`/${country.name}`}>
              {country.name}
            </Link>
          </motion.div>
        </AnimatePresence>
      ))}
      {!borders?.length && (
        <span className="text-black text-base">No borders</span>
      )}
    </div>
  )
}
