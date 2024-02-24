import { useContext } from 'react'
import Card from './Card'
import { Country } from '../types'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from '../contexts/ThemeContext'

type PROPS = {
  countries: Country[]
}

export default function CountriesList({ countries }: PROPS) {
  const theme = useContext(ThemeContext)
  const backgroundColor = theme === 'dark' ? 'bg-slate-800' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

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
            className={`w-full shadow-lg hover:cursor-pointer ${backgroundColor} ${textColor}`}>
            <Card key={country.name} country={country} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
