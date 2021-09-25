import CountryList from './components/CountryList'
import Search from './components/Search'
import CountryDetail from './components/CountryDetail'

import { useState, useEffect } from 'react'

function App() {
  const [loadedCountries, setLoadedCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState({})
  const [isOpen, setISOpen] = useState(false)

  const fetchUrl = () => {
    setIsLoading(true)

    fetch(
      `https://api.countrylayer.com/v2/all?access_key=190e114891ea725f2d73338fc0f56ddf`
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const countriesArr = []
        for (const key in data) {
          const country = {
            id: key,
            ...data[key]
          }
          countriesArr.push(country)
        }
        return countriesArr
      })
      .then((arr) => {
        setLoadedCountries(arr)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchUrl()

    return () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <div
      onClick={() => {
        setISOpen(false)
      }}
    >
      <header>
        <Search
          countries={loadedCountries}
          onClick={(value) => {
            setSearchValue(value)
          }}
          onOpen={(value) => {
            setISOpen(value)
          }}
        />
      </header>
      <div className='country_list'>
        <CountryList
          countries={loadedCountries}
          onLoad={isLoading}
          searchValue={searchValue}
          onClick={(country) => {
            setSelectedCountry(country)
          }}
          isOpen={isOpen}
        />
      </div>
      <main>
        <CountryDetail country={selectedCountry} />
      </main>
    </div>
  )
}

export default App
