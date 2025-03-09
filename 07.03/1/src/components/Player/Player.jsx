import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrackInfo from '../TrackInfo'
import Controls from './controls'
import ProgressBar from './ProgressBar'
import { fetchTracks } from '../../redux/trackSlice'
import { useEffect } from 'react'


export default function player() {
    const tracks = useSelector(state => state.tracks.tracks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTracks())
    }, [dispatch])

    return (
        <div>
            {tracks.map((track) => {
                <>
                    <TrackInfo track={track} />
                    <ProgressBar />
                    <Controls />
                </>
                })}
        </div>
    )

}
