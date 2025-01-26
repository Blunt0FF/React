import React from 'react'
import styles from '../styles/SeatSelector.module.css'


export default function SeatSelector({ seats, onSeatSelected, selectedSeats }) {

    function handleClick(id) {
        if (selectedSeats.includes(id)) {
            onSeatSelected(selectedSeats.filter(seatId => seatId !== id))
        } else  onSeatSelected(prevSeats => [...prevSeats, id])
    }
    return (
        <div>
            {seats.map(seat => <button 
            className={styles.button}
            style={{backgroundColor:selectedSeats.includes(seat.id)&& "lightgreen"}}  
            onClick={() => handleClick(seat.id)} 
            key={seat.id}>{seat.label}</button>)}
        </div>
    )
}
