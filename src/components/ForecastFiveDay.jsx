import React from 'react'
import ForecastCard from './forecastFiveDay/ForecastCard'


function ForecastFiveDay() {
  return (
    <div className='forecast__cards row mx-auto'>
      <ForecastCard day="Tomorrow" max= "23" min="11" forecast="Clear" unit="metric" />
      <ForecastCard day="Tomorrow" max= "23" min="11" forecast="Hail" unit="metric"/>
      <ForecastCard day="Tomorrow" max= "23" min="11" forecast="HeavyCloud" unit="metric"/>
      <ForecastCard day="Tomorrow" max= "23" min="11" forecast="LightRain" unit="metric"/>
      <ForecastCard day="Tomorrow" max= "23" min="11" forecast="Snow" unit="metric"/>
    </div>
  )
}

export default ForecastFiveDay