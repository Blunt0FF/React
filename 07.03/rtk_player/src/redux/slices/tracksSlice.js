// Данные
// – Список треков
// – статус (загрузка, ошибка, ожидание)
// – ошибка

// Действия: имитация загрузки треков
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    tracks: [],
    status: 'idle',
    error: null
}
// Нужен asyncThunk fetchTracks, которая выполняет "асинхронную" загрузку данных
// 1. Подождать 1 секунду
// 2. Вернуть треки

// название слайса / название действия

const fetchTracks = createAsyncThunk('tracks/fetchTracks', async() => {
    // нужно зарезолвить Promise через 1 секунду
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    return [
        {
            id: 1,
            title: "Bohemian rhapsody",
            author: "Queen",
            duration: 5.55
        },
        {
            id: 2,
            title: "SOS",
            author: "ABBA",
            duration: 3.23
        },
        {
            id: 3,
            title: "Beat it",
            author: "Michael Jackson",
            duration: 4.18
        }
    ]
})

const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      // Promise state
      // 1. pending -> в процессе выполнения
      // 2. fulfilled -> выполнен успешно
      // 3. rejected -> выполнен с ошибкой/отклонен
      builder
        .addCase(fetchTracks.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchTracks.fulfilled, (state, action) => {
          state.status = 'idle';
          state.tracks = action.payload;
        })
        .addCase(fetchTracks.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message
        })
    }
 })

 
export default tracksSlice.reducer