// Данные
// – режим проигрывания
// – громкость

// Действия
// – установить режим проигрывания
// – установить громкость
// – сохранить настройки
// – загрузить настройки
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: 'normal',
    volume: 0.5
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setPlayingMode: (state, action) => {
            state.mode = action.payload
        },
        setVolume: (state, action) => {
            state.volume = action.payload
        },
        saveSettings: (state) => {
            localStorage.setItem('settings', JSON.stringify(state))
        },
        loadSettings: (state) => {
            const savedSettings = localStorage.getItem('settings')
            if (savedSettings) {
                const parsedSettings = JSON.parse(savedSettings)
                state.mode = parsedSettings.mode
                state.volume = parsedSettings.volume
            }
        }
    }
})

export const {setPlayingMode, setVolume, saveSettings, loadSettings} = settingsSlice.actions
export default settingsSlice.reducer