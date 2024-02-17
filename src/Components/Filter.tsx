import { useState } from 'react'
import SearchInput from './SearchInput'
import Selectbox from './Selectbox'
import { IoSearchSharp } from 'react-icons/io5'

export default function Filter() {
  const [inputValue, setInputValue] = useState<string>('')

  const options: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const handleSelectboxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="flex flex-col md:flex-row gap-1 justify-between">
      <div className="basis-full md:basis-1/4">
        <SearchInput
          placeholder="Search by country..."
          onChange={handleInputChange}
          value={inputValue}
          icon={<IoSearchSharp className="text-gray-400" />}
        />
      </div>
      <div className="basis-full md:basis-1/4">
        <Selectbox
          initialOption="Filter by region"
          options={options}
          onChange={handleSelectboxChange}
        />
      </div>
    </div>
  )
}
