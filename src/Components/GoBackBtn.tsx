import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type PROPS = {
  label: string
  icon?: ReactNode
}

export default function GoBackBtn(props: PROPS) {
  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center px-3 py-1.5 bg-white text-black font-semibold rounded-md border-x border-y focus:outline-none">
        <div className="mr-1">{props.icon}</div>
        {props.label}
      </Link>
    </div>
  )
}
