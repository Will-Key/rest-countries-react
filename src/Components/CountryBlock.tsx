import { Country } from '../types'
import CountryBlockImage from './CountryBlockImage'
import CountryBlockInfos from './CountryBlockInfos'
import { motion } from 'framer-motion'

type PROPS = {
  country?: Country
}

export default function CountryBlock({ country }: PROPS) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
      <CountryBlockImage src={country?.flag} alt={country?.name} />
      <CountryBlockInfos country={country} />
    </motion.div>
  )
}
