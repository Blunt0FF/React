import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'normal',
    volume: 0.5,
}
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setPlayingMode: (state, action) => {
            state.mode = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        saveSettings: (state) => {
            localStorage.setItem('settings', JSON.stringify(state));
            loadSettings: (state) => {
                const saveSettings = localStorage.getItem('settings');
                if (saveSettings) {
                    const parsedSettings = JSON.parse(saveSettings);
                    state.mode = parsedSettings.mode;
                    state.volume = parsedSettings.volume;
                }
            }
        },
    })

export const { setPlayingMode, setVolume, saveSettings, loadSettings } = settingsSlice.actions;