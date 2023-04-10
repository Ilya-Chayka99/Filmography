import { configureStore } from '@reduxjs/toolkit';
import films from '../Components/FilmsList/filmSlice.jsx';
 import {apiSlice} from '../Components/api/apiSlice.jsx';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {films,[apiSlice.reducerPath]:apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware,apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;