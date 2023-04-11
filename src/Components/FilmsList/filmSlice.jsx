import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {apiSlice} from "../api/apiSlice.jsx";


const initialState = {
    films:[],
    filmsFiltr: [],
    filmsComplete:[],
    filmsWill:[],
    filmSinglPage:{},
    commentsFilm:[]
};

// export const fetchFilms = createAsyncThunk(
//     'films/fetchFilms',
//     () => {
//         const {request} = useHttp();
//         return  request('https://api.kinopoisk.dev/v1/movie?selectFields=id&selectFields=name&selectFields=year&selectFields=description&selectFields=rating&selectFields=poster&page=1&limit=10');
//     }
// );
const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmLoadComments: (state,action)=>{
            state.commentsFilm.push(action.payload);
            localStorage.setItem("Comments",JSON.stringify(state.commentsFilm));
        },
        filmSinglePage: (state, action) => {
            state.filmSinglPage = action.payload;
        },
        filmAddComplete:(state,action) =>{
            if(state.filmsWill.includes(action.payload))
                state.filmsWill=state.filmsWill.filter(item=>item!==action.payload)
            state.filmsComplete.push(action.payload);
            localStorage.setItem("Will",JSON.stringify(state.filmsWill));
            localStorage.setItem("Com",JSON.stringify(state.filmsComplete));
        },
        filmAddWill:(state,action) =>{
            if(state.filmsComplete.includes(action.payload))
                state.filmsComplete=state.filmsComplete.filter(item=>item!==action.payload)
            state.filmsWill.push(action.payload)
            localStorage.setItem("Will",JSON.stringify(state.filmsWill));
            localStorage.setItem("Com",JSON.stringify(state.filmsComplete));
        },
        filmFiltor:(state,action) =>{
            state.filmsFiltr = state.films.filter(item=>(
                item.name.includes(action.payload.name)&&
                    item.rating.kp>=action.payload.rate&&
                    item.year.toString().includes(action.payload.year)
            ))
        },
        filmSortAB:(state,action)=>{
            state.filmsFiltr = state.filmsFiltr.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        },
        filmSortRete:(state,action)=>{
            state.filmsFiltr = state.filmsFiltr.sort((a, b) => {
                if (a.rating.kp < b.rating.kp) {
                    return 1;
                }
                if (a.rating.kp > b.rating.kp) {
                    return -1;
                }
                return 0;
            });
        },
        filmSortYearN:(state,action)=>{
            state.filmsFiltr = state.filmsFiltr.sort((a, b) => {
                if (a.year < b.year) {
                    return 1;
                }
                if (a.year > b.year) {
                    return -1;
                }
                return 0;
            });
        },
        filmSortYearL:(state,action)=>{
            state.filmsFiltr = state.filmsFiltr.sort((a, b) => {
                if (a.year < b.year) {
                    return -1;
                }
                if (a.year > b.year) {
                    return 1;
                }
                return 0;
            });
        }

    },
    extraReducers:(builder)=>{
        builder.addMatcher(apiSlice.endpoints.getFilms.matchFulfilled,(state,{payload})=>{
            state.films=payload.docs;
            state.filmsFiltr=state.films;
            if(localStorage.getItem("Will") && localStorage.getItem("Com")){
                state.filmsWill=(JSON.parse(localStorage.getItem("Will"))) ;
                state.filmsComplete=(JSON.parse(localStorage.getItem("Com")) );
            }
            if(localStorage.getItem("Comments")){
                state.commentsFilm=(JSON.parse(localStorage.getItem("Comments")) );
            }
        })
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchFilms.pending, state => {state.filmsLoadingStatus = 'loading'})
    //         .addCase(fetchFilms.fulfilled, (state, action) => {
    //             state.filmsLoadingStatus = 'idle';
    //             state.films = action.payload.docs;
    //             state.filmsFiltr = state.films;
    //         })
    //         .addCase(fetchFilms.rejected, state => {
    //             state.filmsLoadingStatus = 'error';
    //         })
    //         .addDefaultCase(() => {})
    // }
});

const {actions, reducer} = filmsSlice;

export default reducer;


export const {
    filmSortAB,
    filmFiltor,
    filmAddWill,
    filmAddComplete,
    filmSortRete,
    filmSortYearN,
    filmSortYearL,
    filmSinglePage,
    filmLoadComments
} = actions;