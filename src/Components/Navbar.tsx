import { useContext } from 'react'
import ThemeButton from './Button'
import { ThemeContext } from '../contexts/ThemeContext'

type PROPS = {
  handleClick: (newTheme: 'dark' | 'light') => void
}

export default function Navbar({ handleClick }: PROPS) {
  const theme = useContext(ThemeContext)
  const backgroundColor = theme === 'dark' ? 'bg-slate-800' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  const handleOnClick = (newTheme: 'dark' | 'light') => {
    handleClick(newTheme)
  }

  return (
    <header
      className={`fixed flex items-center top-0 left-0 ${backgroundColor} z-50 shadow-lg px-14 h-20 w-full`}>
      <div className="flex items-center justify-between w-full">
        <p className={`text-lg font-bold ${textColor}`}>Where in the world ?</p>
        <div>
          <ThemeButton onClick={handleOnClick} />
        </div>
      </div>
    </header>
  )
}
