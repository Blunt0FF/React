import React from 'react'

export default function CityCard({ selectedCity }) {
    return (
        <div>
            <h2>{selectedCity.name}</h2>
            <img src={selectedCity.imageUrl} alt={selectedCity.name} />
            <p>{selectedCity.description}</p>
            <ul>
                {selectedCity.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}
