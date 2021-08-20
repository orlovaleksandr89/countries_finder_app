import classes from './CountryList.module.css'
import { useState, useEffect } from 'react'

const CountryList = (props) => {
  const [selectedCountry, setSelectedCountry] = useState({})
  const [countries, setCountries] = useState([])

  useEffect(() => {
    document.title = selectedCountry.name || 'Countries finder'
    props.onClick(selectedCountry)
  }, [selectedCountry, props])

  useEffect(() => {
    const filterCountries = (props) => {
      const filtered = props.countries.filter((country) =>
        country.name.toLowerCase().includes(props.searchValue)
      )
      setCountries(filtered)
    }
    filterCountries(props)

    return () => {
      setCountries(props.countries)
    }
  }, [props.searchValue, props])

  if (props.onLoad) {
    return (
      <div className={classes.container}>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <ul className={classes.ul}>
        {countries.map((country) => (
          <li
            className={selectedCountry === country ? classes.selected : ''}
            key={country.id}
            onClick={() => {
              setSelectedCountry(country)
            }}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryList
