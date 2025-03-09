import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = { 
    tracks: [
        
    ],
    status: 'idle',
    error: null,
    };

const fetchTracks = createAsyncThunk('tracks/fetchTracks', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
        return [{
            id: 1,
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            duration: '6:07',
        },
        {
            id: 2,
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
            duration: '8:02',
        },
        {
            id: 3,
            title: 'Hotel California',
            artist: 'Eagles',
            duration: '6:30',
        },
        {
            id: 4,
            title: 'Imagine',
            artist: 'John Lennon',
            duration: '3:03',
        },
        {
            id: 5,
            title: 'Smells Like Teen Spirit',
            artist: 'Nirvana',
            duration: '5:01',
        },
        {
            id: 6,
            title: 'One',
            artist: 'Metallica',
            duration: '7:27',
        },
        {
            id: 7,
            title: 'Comfortably Numb',
            artist: 'Pink Floyd',
            duration: '6:24',
        },]})

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTracks.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTracks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tracks = action.payload;
        })
        .addCase(fetchTracks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },

    export default tracksSlice.reducer