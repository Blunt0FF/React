import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentTrack } from '../../redux/slices/playerSlice'

export default function Controls() {
    const currID = useSelector(state => state.player.currentId)
    const tracks = useSelector(state => state.tracks.tracks)
    const dispatch = useDispatch()
    const handlePrevTrack = () => {
        const currTrackIdx = tracks.findIndex(track => track.id === currID)
        if (currTrackIdx !== 0) {
            const nextTrack 
            dispatch(setCurrentTrack(tracks[currTrackIdx - 1].id))
        }
    }
  return (
    <div>
        <button onClick={}>Previous</button>
        <button>Play/Pause</button>
        <button>Next</button>
    </div>
  )
}
