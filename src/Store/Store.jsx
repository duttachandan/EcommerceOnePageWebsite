import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducers:{
        cart:cartReducer,
    },
    devTools:true
})
export default store;