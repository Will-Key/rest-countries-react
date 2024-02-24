import { ReactNode, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

type PROPS = {
  label: string
  icon?: ReactNode
}

export default function GoBackBtn(props: PROPS) {
  const theme = useContext(ThemeContext)
  const dynamicClass =
    theme === 'dark' ? 'bg-slate-800 border-slate-800 shadow-md' : 'bg-white'

  return (
    <div>
      <Link
        to="/"
        className={`inline-flex items-center px-3 py-1.5 font-semibold rounded-md border-x border-y focus:outline-none ${dynamicClass}`}>
        <div className="mr-1">{props.icon}</div>
        {props.label}
      </Link>
    </div>
  )
}
