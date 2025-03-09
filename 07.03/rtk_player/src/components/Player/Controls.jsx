import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, togglePlay } from '../../redux/slices/playerSlice'

export default function Controls() {
    const currID = useSelector(state => state.player.currentId)
    const isPlaying = useSelector(state => state.player.isPlaying)
    const tracks = useSelector(state => state.tracks.tracks)
    const dispatch = useDispatch()

    const handlePrevTrack = () => {
        const currTrackIdx = tracks.findIndex(track => track.id === currID)
        if (currTrackIdx !== 0) {
            const prevTrack = tracks[currTrackIdx - 1]
            dispatch(setCurrentTrack(prevTrack.id))
        }
    }

    const handleNextTrack = () => {
        const currTrackIdx = tracks.findIndex(track => track.id === currID)
        if (currTrackIdx !== (tracks.length - 1)) {
            const nextTrack = tracks[currTrackIdx + 1]
            dispatch(setCurrentTrack(nextTrack.id))
        }
    }

  return (
    <div>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={() => dispatch(togglePlay())}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNextTrack}>Next</button>
    </div>
  )
}
