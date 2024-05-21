import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {useState} from "react"
import axios from "axios"

const Url = "https://fakestoreapi.com/products"
const [cart, setCart] = useState([]);

const fetchData = createAsyncThunk(async ()=>{
    const Data = await axios.get(Url)
    .then(res=>cart(res.data))
})

const CartReducer = createSlice({
    initialState: [],
    ExtraReducer:(builder)=>{
        builder.addCase()
    }
})

export default CartReducer.reducers;