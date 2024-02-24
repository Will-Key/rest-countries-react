import { IoMdArrowBack } from 'react-icons/io'
import GoBackBtn from '../Components/GoBackBtn'
import CountryBlock from '../Components/CountryBlock'
import { Error as ErrorComponent } from '../Components/Error'
import { Country } from '../types'
import { useEffect, useState } from 'react'
import { apiFetch } from '../utils/api-fetch'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'

type Error = {
  message: string
}

export default function CountryPage() {
  const { countryName } = useParams()
  const [country, setCountry] = useState<Country | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true)
      try {
        const data = await apiFetch<Country[]>({
          urlPath: `name/${countryName ?? ''}`,
        })
        setIsLoading(false)
        setCountry(data[0])
        setError(null)
      } catch (e) {
        setError(e as Error)
        setIsLoading(false)
      }
    }

    fetchCountries()
  }, [countryName])

  const showError = !!error && !isLoading
  const shouwCountryBlock = !isLoading && !error

  return (
    <div className="flex flex-col gap-6">
      <GoBackBtn label="Back" icon={<IoMdArrowBack />} />
      {isLoading && <Loading />}
      {showError && <ErrorComponent error={error} />}
      {shouwCountryBlock && <CountryBlock country={country} />}
    </div>
  )
}
