import { createSlice } from '@reduxjs/toolkit';
export const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState: {
        IsLogin: false
    },
    reducers: {
        SetIsLogin: (state, action) => {
            state.IsLogin = action.payload;

        },
    },
});

export const { SetIsLogin } = AuthReducer.actions;

export default AuthReducer.reducer;