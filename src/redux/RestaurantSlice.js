import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// api call create Async thunk

export const fetchRestaurants = createAsyncThunk('RestaurantList/fetchRestaurants',()=>
{
        // api call it there
        // very carfull the redux toolkit using api call
        // 
       return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const RestaurantSlice = createSlice({
    name:'RestaurantList',
    initialState:{
        loading:false,
        allrestaurant:[],
        allrestaurantContainer:[],
        error:''
    },

    reducers:{
        searchResturant:(state,action)=>{
            state.allrestaurant = state.allrestaurantContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurants.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{
            state.loading=false
            state.allrestaurant = action.payload
            state. allrestaurantContainer=action.payload
            state.error= ""
        })
        builder.addCase(fetchRestaurants.rejected,(state,action)=>{
            state.loading= false
            state.allrestaurant = []
            state.error = action.error.message

        })

    }
})
export const  {searchResturant} = RestaurantSlice.actions
export default RestaurantSlice.reducer