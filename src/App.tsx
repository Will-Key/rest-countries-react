import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/Home'
import CountryPage from './Pages/Country'
import Navbar from './Components/Navbar'

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
  return (
    <div className="mt-28 ml-14 mr-14 mb-14">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
