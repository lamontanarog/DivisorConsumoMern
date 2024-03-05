import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import indexSlice from './indexSlice';

const store = configureStore({
    reducer: {
        rootReducer,
        index: indexSlice,
    }
});

export default store;
