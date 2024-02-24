import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { IoMdMoon } from 'react-icons/io'
import { IoSunnySharp } from 'react-icons/io5'

type PROPS = {
  onClick: (newTheme: 'dark' | 'light') => void
}

const htmlTag = document.getElementsByTagName('html')[0]

export default function ThemeButton({ onClick }: PROPS) {
  const theme = useContext(ThemeContext)
  const backgroundColor = theme === 'dark' ? 'bg-slate-800' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  const handleClick = () => {
    htmlTag.className = ''
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    const htmlClass =
      newTheme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-black'
    htmlTag.className += htmlClass
    onClick(newTheme)
  }

  return (
    <button
      type="button"
      className={`w-full inline-flex items-center font-bold ${backgroundColor} ${textColor}`}
      onClick={handleClick}>
      <div className="mr-1">
        {theme === 'dark' ? <IoSunnySharp /> : <IoMdMoon />}
      </div>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
