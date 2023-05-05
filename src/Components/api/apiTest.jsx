import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export  const apiTest = createApi({
    reducerPath:'apiTest',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080',
        prepareHeaders:(headers)=>{
            // headers.set('X-API-KEY','QKCE5YA-NAN4J7Q-NRJ9GA9-M8P2W7P');
            return headers;
        }
    }),
    endpoints: builder =>({
        getF:builder.query({
            query: (params)=>`eblankorzinka?message=${params}`

        })
    })
})

export const {useGetFQuery}=apiTest;
