// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import DoctorReducer from './DoctorReducer';

const store = configureStore({
    reducer: {
        doctor: DoctorReducer,
    },
});

export default store;
