import { createSlice } from "@reduxjs/toolkit"
const initialState = ''



const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, action) {
            return action.payload
        }
    }
})

export const createFilterChange = (filterValue) => {
    return {
        type: 'filter/changeFilter',
        payload: filterValue
    }
}

export default filterSlice.reducer
export const { changeFilter } = filterSlice.actions
