import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/Home'
import CountryPage from './Pages/Country'
import Navbar from './Components/Navbar'
import { ThemeContext } from './contexts/ThemeContext'
import { useState } from 'react'

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: '/:countryName',
    element: <CountryPage />,
  },
])

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>()
  const backgroundColor = theme === 'dark' ? 'bg-slate-800' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`mt-28 ml-14 mr-14 mb-14 ${backgroundColor} ${textColor}`}>
        <Navbar handleClick={handleThemeChange} />
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
