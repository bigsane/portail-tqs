import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeKey: 1,
}

export const navSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        clear: () => initialState,
        setKey: (state, { payload }) => {
            state.activeKey = payload
        },
    },
})

export const { clear, setKey } = navSlice.actions

export default navSlice.reducer
