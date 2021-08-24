import classes from './css/CountryList.module.css'
import { useState, useEffect } from 'react'

const CountryList = (props) => {
  const [selectedCountry, setSelectedCountry] = useState({})
  const [countries, setCountries] = useState([])
  const [listIsOpen, setListIsOpen] = useState(props.isOpen)
  console.log(listIsOpen)

  useEffect(() => {
    document.title = selectedCountry.name || 'Countries finder'
    props.onClick(selectedCountry)
  }, [selectedCountry, props])

  useEffect(() => {
    const filterCountries = (props) => {
      const filtered = props.countries.filter((country) =>
        country.name.toLowerCase().includes(props.searchValue.toLowerCase())
      )
      setCountries(filtered)
    }

    filterCountries(props)

    return () => {
      setCountries(props.countries)
    }
  }, [props.searchValue, props])

  useEffect(() => {
    setListIsOpen(props.isOpen)
  }, [props.searchValue, props.isOpen])

  if (props.onLoad) {
    return (
      <div className={classes.container}>
        <span>Loading...</span>
      </div>
    )
  }
  function toggleList() {
    if (listIsOpen === true) {
      return setListIsOpen(false)
    }
    return setListIsOpen(true)
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.select_dropdown}>
          <button
            className={classes.select_dropdown_button}
            onClick={() => toggleList()}
          >
            <span className={classes.select_dropdown}>
              {selectedCountry.name ? selectedCountry.name : 'Select country'}
            </span>
          </button>
          <ul
            className={
              !listIsOpen
                ? classes.select_dropdown_list
                : [classes.select_dropdown_list, classes.active].join(' ')
            }
          >
            {countries.map((country) => (
              <li
                className={classes.select_dropdown_list_item}
                key={country.id}
                onClick={() => {
                  setSelectedCountry(country)
                  toggleList()
                }}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CountryList
