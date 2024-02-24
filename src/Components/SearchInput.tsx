import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

type PROPS = {
  placeholder: string
  icon?: ReactNode
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function SearchInput(props: PROPS) {
  const theme = useContext(ThemeContext)
  const textColor = theme === 'dark' ? 'text-black' : ''

  return (
    <div className="relative">
      <input
        className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${textColor}`}
        type="text"
        name="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        {props.icon}
      </div>
    </div>
  )
}
