import CountriesList from '../Components/CoutriesList'
import Filter from '../Components/Filter'
import { Country } from '../types'
import { useContext, useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import { Error as ErrorComponent } from '../Components/Error'
import { apiFetch } from '../utils/api-fetch'
import { ThemeContext } from '../contexts/ThemeContext'

type Error = {
  message: string
}

export default function HomePage() {
  const [initialCountries, setInitialCountries] = useState<Country[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const theme = useContext(ThemeContext)
  const backgroundColor = theme === 'dark' ? 'bg-slate-800' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await apiFetch<Country[]>({ urlPath: 'all' })
        setInitialCountries(data)
        setCountries(data)
        setIsLoading(false)
        setError(null)
      } catch (e) {
        setError(e as Error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      const sliceCountries = initialCountries.filter(
        (country) =>
          country.name
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase()) ||
          country.nativeName
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
      )
      setCountries(sliceCountries)
    } else {
      setCountries(initialCountries)
    }
  }

  const handleSelectboxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)
    if (e.target.value === 'All') {
      setCountries(initialCountries)
      setIsLoading(false)
    } else {
      const sliceCountries = initialCountries.filter(
        (country) =>
          country.region.toLocaleLowerCase() ===
          e.target.value.toLocaleLowerCase()
      )
      setCountries(sliceCountries)
      setIsLoading(false)
    }
  }

  const showError = !!error && !isLoading
  const showCountriesList = !isLoading && !error

  return (
    <div className={`flex flex-col gap-6 ${backgroundColor} ${textColor}`}>
      <Filter
        onInputChange={handleInputChange}
        onSelectboxChange={handleSelectboxChange}
      />
      {showError && <ErrorComponent error={error} />}
      {isLoading && <Loading />}
      {showCountriesList && <CountriesList countries={countries} />}
    </div>
  )
}
