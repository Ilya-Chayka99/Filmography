import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import useKinoService from "../../services/KinoService.jsx";
import {useHttp} from "../hook/http.hook.jsx";


const initialState = {
    filmsLoadingStatus: 'idle',
    films: []
};

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    () => {
        const {request} = useHttp();
        return  request('https://api.kinopoisk.dev/v1/movie?selectFields=id&selectFields=name&selectFields=year&selectFields=description&selectFields=rating&selectFields=poster&page=1&limit=10');
    }
);
const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmDeleted: (state, action) => {
            state.films = state.films.filter(item=>item.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, state => {state.filmsLoadingStatus = 'loading'})
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.filmsLoadingStatus = 'idle';
                state.films = action.payload.docs;
            })
            .addCase(fetchFilms.rejected, state => {
                state.filmsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = filmsSlice;

export default reducer;


export const {
    filmsFetching,
    filmsFetched,
    filmsFetchingError,
    filmDeleted
} = actions;