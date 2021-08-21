import classes from './css/Search.module.css'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [resetValue, setResetValue] = useState('')

  return (
    <div className={classes.search}>
      <span>Countries finder</span>
      <div className={classes.input}>
        <input
          placeholder='Search for a country'
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.currentTarget.value)
            props.onClick(searchValue)
          }}
        />
        {searchValue && (
          <span
            className={classes.close}
            onClick={() => {
              setResetValue('')
              props.onClick(resetValue)
              setSearchValue(resetValue)
            }}
          ></span>
        )}
      </div>
    </div>
  )
}

export default Search
