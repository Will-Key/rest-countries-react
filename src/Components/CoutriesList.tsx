import Card from './Card'
import { Country } from '../types'
import { AnimatePresence, motion } from 'framer-motion'

type PROPS = {
  countries: Country[]
}

export default function CountriesList({ countries }: PROPS) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
      <AnimatePresence>
        {countries?.map((country) => (
          <motion.div
            key={country.name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white w-full shadow-lg hover:cursor-pointer">
            <Card key={country.name} country={country} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
