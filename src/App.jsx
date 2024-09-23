import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

import Routes from './components/Routes'
import WeatherContextProvider from './context/WeatherContextProvider'

import Loading from './components/Loading'
import { useEffect, useState } from 'react'

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])
  return (
    <>
      {loading
        ?
        (<Loading />)

        :
        (
          <WeatherContextProvider>
            <Routes />
          </WeatherContextProvider>
        )}
    </>

  )
}

export default App



