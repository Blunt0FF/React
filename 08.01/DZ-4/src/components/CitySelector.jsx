import React from 'react'
import CityCard from './CityCard'

export default function CitySelector({citiesData, handleCityChange, selectedCity}) {
  return (
    <form>
            <h2>Выберите город:</h2>
      <select value={selectedCity.name} onChange={(e) => handleCityChange(e.target.value)}>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
               ))}
               </select>
    </form>
  )
}
