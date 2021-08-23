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

    fetch(`https://restcountries.eu/rest/v2/`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('fetch')
        const countriesArr = []
        for (const key in data) {
          const country = {
            id: key,
            ...data[key],
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
    <>
      <header>
        <Search
          countries={loadedCountries}
          onClick={(value) => {
            setSearchValue(value)
          }}
          onOpen={(isOpen) => {
            setISOpen(isOpen)
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
        />
      </div>
      <main>
        <CountryDetail country={selectedCountry} isOpen={isOpen} />
      </main>
    </>
  )
}

export default App