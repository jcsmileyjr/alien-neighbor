import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    name: string
}

const initialState: User = {
    name: "",
}

export const userInformationSlice = createSlice({
    name: "userInformation",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            return state;
        },
    },
});

export const { setName } = userInformationSlice.actions;
export default userInformationSlice.reducer;