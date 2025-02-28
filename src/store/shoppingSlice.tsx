import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ShoppingItem{
    items: string[]
}

const initailState:ShoppingItem = {
    items:["Bread","Hot Dog"]
}

const shoppinslice = createSlice({
    name:"shopping",
    initialState:initailState,
    reducers:{
        AddItem:(state, action: PayloadAction<string>) =>{
            const newItem = action.payload;
            state.items.push(newItem);
        }
    }
})

export const {AddItem} = shoppinslice.actions;
export default shoppinslice.reducer;