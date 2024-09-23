import { createSlice } from '@reduxjs/toolkit';
export const DoctorReducer = createSlice({
    name: 'DoctorReducer',
    initialState: {
        speciality: {},
    },
    reducers: {
        SetSpeciality: (state, action) => {
            state.speciality = action.payload;
        },
    },
});

export const { SetSpeciality } = DoctorReducer.actions;

export default DoctorReducer.reducer;