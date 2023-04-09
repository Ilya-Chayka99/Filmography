import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useHttp} from "../hook/http.hook.jsx";


const initialState = {
    filmsLoadingStatus: 'idle',
    films: [],
    filmsFiltr: [],
    filmsComplete:[],
    filmsWill:[]
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
        },
        filmAddComplete:(state,action) =>{
            if(state.filmsWill.includes(action.payload))
                state.filmsWill=state.filmsWill.filter(item=>item!==action.payload)
            state.filmsComplete.push(action.payload);
        },
        filmAddWill:(state,action) =>{
            if(state.filmsComplete.includes(action.payload))
                state.filmsComplete=state.filmsComplete.filter(item=>item!==action.payload)
            state.filmsWill.push(action.payload)
        },
        filmFiltor:(state,action) =>{
            state.filmsFiltr = state.films.filter(item=>(
                item.name === action.payload.name
            ))
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, state => {state.filmsLoadingStatus = 'loading'})
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.filmsLoadingStatus = 'idle';
                state.films = action.payload.docs;
                state.filmsFiltr = state.films;
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
    filmFiltor,
    filmAddWill,
    filmAddComplete,
    filmDeleted
} = actions;