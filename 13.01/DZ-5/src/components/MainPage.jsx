import React from 'react'
import spotifyLogo from '../assets/spotify.svg';
import a from '../assets/a.svg'
import g from '../assets/g.svg'
import x from '../assets/x.svg'

export default function MainPage() {
  return (
    <div>
    <img src={spotifyLogo} className='spotify' alt="Spotify logo" />
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <h2>Sign in <br /> with</h2>
        <div className="container">
        <img src={a}/> 
        <img src={g}/> 
        <img src={x}/> 
        </div>
    </div>
  )
}
