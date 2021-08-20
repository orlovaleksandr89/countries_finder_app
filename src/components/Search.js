import classes from './Search.module.css'
import { useState } from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [resetValue, setResetValue] = useState('')

  return (
    <div className={classes.search}>
      <span>Countries finder</span>
      <input
        placeholder='Search for a country'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.currentTarget.value)
          props.onClick(searchValue)
        }}
      />
      <button
        onClick={() => {
          setResetValue('')
          props.onClick(resetValue)
          setSearchValue(resetValue)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default Search
