import classes from './css/CountryDetails.module.css'
import Card from './ui/Card'
import Flag from 'react-world-flags'

const CountryDetail = (props) => {
  const { name, capital, region, alpha2Code } = props.country

  if (!name) {
    return <div className={classes.display}>Nothing to display yet</div>
  }

  return (
    <div className={classes.details}>
      <h1>Country details</h1>
      <hr />
      <Card>
        <div className={classes.info}>
          <p>{name}</p>

          <br />
          <p>Capital city: {capital}</p>
          <br />
          <p>Region: {region}</p>
        </div>
        <Flag code={alpha2Code} />
      </Card>
    </div>
  )
}

export default CountryDetail
