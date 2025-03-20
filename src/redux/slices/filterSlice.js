import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    categoryId: 0,
    sortType: {
        name: "Популярности",
        sortProperty: "rating"
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log(action);
            state.categoryId = action.payload;
        },
        setPickout(state, action) {
            state.sortType = action.payload;
        }
    }
});

export const {setCategoryId, setPickout} = filterSlice.actions;

export default filterSlice.reducer; 