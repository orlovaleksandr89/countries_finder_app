import classes from './css/Search.module.css'
import { useState, useEffect } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [resetValue, setResetValue] = useState('')

  useEffect(() => {
    setSearchValue(searchValue)
    console.log(searchValue)
    props.onClick(searchValue)
    return () => {
      setSearchValue('')
    }
  }, [searchValue, props])

  return (
    <div className={classes.search}>
      <span>Countries finder</span>
      <div className={classes.input}>
        <input
          placeholder='Search for a country'
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.currentTarget.value)
          }}
        />
        {searchValue && (
          <div className={classes.close_wrapper}>
            <span
              className={classes.close}
              onClick={() => {
                setResetValue('')
                props.onClick(resetValue)
                setSearchValue(resetValue)
              }}
            ></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
