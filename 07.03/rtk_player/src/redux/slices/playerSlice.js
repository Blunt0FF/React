// Данные
// – id текущего трека
// – играет или нет
// – текущее время трека
// – громкость

// Действия
// – установить текущий трек
// – включить/отключить проигрывание
// – установить текущее время трека
// – установить громкость
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentId: null,
    isPlaying: false,
    currentTime: 0,
    volume: 0.5
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrentTrack: (state, action) => {
            state.isPlaying = true,
            state.currentId = action.payload,
            state.currentTime = 0
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload
        },
        setVolume: (state, action) => {
            state.volume = action.payload
        }
    }
})

export const {setCurrentTrack, togglePlay, setCurrentTime, setVolume} = playerSlice.actions
export default playerSlice.reducer