import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

type PROPS = {
  initialOption: string
  options: { name: string; value: string }[]
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export default function Selectbox(props: PROPS) {
  const theme = useContext(ThemeContext)
  const textColor = theme === 'dark' ? 'text-black' : ''

  return (
    <select
      className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${textColor}`}
      onChange={props.onChange}>
      <option value="All">{props.initialOption}</option>
      {props.options?.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
