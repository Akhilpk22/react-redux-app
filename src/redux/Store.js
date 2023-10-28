import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice from './RestaurantSlice'

const store =configureStore({
    reducer:{
        RestaurantSlice
    }
})

export default store;