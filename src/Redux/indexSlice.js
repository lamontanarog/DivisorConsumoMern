import {createSlice} from '@reduxjs/toolkit'

const indexSlice = createSlice( {
    name: 'index',
    initialState: {
        selectedIndex: null,
    },
    reducers: {
        setSelectedIndex(state, action) {
            state.selectedIndex = action.payload;
        },
    },
})


export const {setSelectedIndex} = indexSlice.actions;
export default indexSlice.reducer;