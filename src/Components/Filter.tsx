import React from 'react'
import SearchInput from './SearchInput'
import Selectbox from './Selectbox'
import { IoSearchSharp } from 'react-icons/io5'

const options: { name: string; value: string }[] = [
  {
    name: 'Africa',
    value: 'Africa',
  },
  {
    name: 'America',
    value: 'Americas',
  },
  {
    name: 'Asia',
    value: 'Asia',
  },
  {
    name: 'Europe',
    value: 'Europe',
  },
  {
    name: 'Oceania',
    value: 'Oceania',
  },
]

type PROPS = {
  onInputChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onSelectboxChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export default function Filter(props: PROPS) {
  return (
    <div className="flex flex-col md:flex-row gap-1 justify-between">
      <div className="basis-full md:basis-1/4">
        <SearchInput
          placeholder="Search by country..."
          icon={<IoSearchSharp className="text-gray-400" />}
          onChange={props.onInputChange}
        />
      </div>
      <div className="basis-full md:basis-1/4">
        <Selectbox
          initialOption="Filter by region"
          options={options}
          onChange={props.onSelectboxChange}
        />
      </div>
    </div>
  )
}
