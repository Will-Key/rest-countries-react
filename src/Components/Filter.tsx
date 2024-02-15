import { useState } from 'react'
import Input from './Input'
import Selectbox from './Selectbox'

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
    <div className="flex justify-between w-full">
      <div className="w-60">
        <Input
          placeholder="Search by country..."
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      <div className="w-60">
        <Selectbox
          initialOption="Filter by region"
          options={options}
          onChange={handleSelectboxChange}
        />
      </div>
    </div>
  )
}
