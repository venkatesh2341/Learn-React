import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cartttt',
    initialState :{
        items: []
    },
    reducers: {

        addItem: (state, action)=>{
            //mutating the state over here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItems:(state)=>{
            state.items.length = 0;
        }
    }
})
// Redux internally creates a slice like following
// cartSlic{
//     actions:{
//         addItem, removeItem, clearItems
//     },
//     reducer
// }

export const {addItem, removeItem, clearItems} = cartSlice.actions
export default cartSlice.reducer;