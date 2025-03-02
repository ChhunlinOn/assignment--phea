import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// ✅ Define the ShoppingItem interface
interface ShoppingItem {
    items: string[];
}

// ✅ Initial state
const initialState: ShoppingItem = {
    items: [],
};

// ✅ Async thunk to fetch todos
export const fetchTodos = createAsyncThunk("shopping/fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((todo: { title: string }) => todo.title); // ✅ Extract only titles
});

// ✅ Create Redux slice
const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        AddItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.items = action.payload; // ✅ Safe state update using Redux Toolkit's Immer
        });
    },
});

// ✅ Export actions and reducer
export const { AddItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
