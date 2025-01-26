import React, { useState } from 'react'
import EventDetails from './EventDetails'
import SeatSelector from './SeatSelector'
import styles from '../styles/EventBooking.module.css'


export default function EventBooking() {
    const [selectedSeats,setSelectedSeats] = useState([])
  const seats = [
    { id: 1, label: "1A" },
    { id: 2, label: "1B" },
    { id: 3, label: "1C" },
    { id: 4, label: "1D" },
    { id: 5, label: "1E" },
    { id: 6, label: "1F" },
    { id: 7, label: "1G" },
]
    

    return (
        <div className={styles.event_booking}>
        <EventDetails/>
        <SeatSelector selectedSeats={selectedSeats} onSeatSelected={setSelectedSeats} seats={seats}/>
        <p>Selected seats: {selectedSeats.join(", ")}</p>
        </div>
  )
}
