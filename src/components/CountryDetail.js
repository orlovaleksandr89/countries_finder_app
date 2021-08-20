import classes from './CountryDetails.module.css'
import Card from './Card'

const CountryDetail = (props) => {
  const { name, capital, flag, currencies } = props.country

  if (!name) {
    return <div>Nothing to display yet</div>
  }
  const { name: currencyName, symbol } = currencies[0]

  const show = () => {
    console.log()
  }
  show()

  return (
    <div className={classes.details}>
      <h1>Country details</h1>
      <hr />
      <Card>
        <div className={classes.info}>
          <img src={flag} alt={name} />
          <br />
          <section>
            <p>{name}</p>
            <p>Capital: {capital}</p>
            <p>
              Currency: {currencyName}, symbol: {symbol}
            </p>
          </section>
        </div>
      </Card>
    </div>
  )
}

export default CountryDetail
