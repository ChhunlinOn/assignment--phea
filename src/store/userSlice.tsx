import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Username {
    item: string
}

const initialState: Username = {
    item: "Lin"
}

const userSlice = createSlice({
    name: "username",
    initialState: initialState,
    reducers: {
        AddItem: (state, action: PayloadAction<string>) => {
            state.item = action.payload;
        }
    }
})

export const { AddItem } = userSlice.actions;
export default userSlice.reducer;