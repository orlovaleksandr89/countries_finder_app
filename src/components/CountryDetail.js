import classes from './css/CountryDetails.module.css'
import Card from './ui/Card'

const CountryDetail = (props) => {
  const { name, capital, flag, currencies } = props.country

  if (!name) {
    return <div className={classes.display}>Nothing to display yet</div>
  }
  const { name: currencyName, symbol } = currencies[0]

  return (
    <div className={classes.details}>
      <h1>Country details</h1>
      <hr />
      <Card>
        <div className={classes.info}>
          <p>{name}</p>
          <img src={flag} alt={name} />
          <br />
          <p>Capital city: {capital}</p>
          <p>
            Currency: {currencyName}, symbol: {symbol}
          </p>
        </div>
      </Card>
    </div>
  )
}

export default CountryDetail
