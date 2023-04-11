import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export  const apiSlice = createApi({
    reducerPath:'apiFilm',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.kinopoisk.dev/v1/movie',
        prepareHeaders:(headers)=>{
            headers.set('X-API-KEY','QKCE5YA-NAN4J7Q-NRJ9GA9-M8P2W7P');
            return headers;
        }
    }),
    endpoints: builder =>({
        getFilms:builder.query({
            query: (params)=>`?selectFields=id&selectFields=name&selectFields=year&selectFields=description&selectFields=rating&selectFields=poster&page=1&limit=100`
        }),
        getFilmsID:builder.query({
            query: (params)=>`/${params.id}`
        })
    })
})

export const {useGetFilmsQuery,useGetFilmsIDQuery}=apiSlice;
