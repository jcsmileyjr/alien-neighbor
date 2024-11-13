import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    user_name: string
    user_illegal_name?: string
}

const initialState: User = {
    user_name: "",
    user_illegal_name: "",
}

export const userInformationSlice = createSlice({
    name: "userInformation",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.user_name = action.payload;
            return state;
        },
        setIllegalName: (state, action: PayloadAction<string>) => {
            state.user_illegal_name = action.payload;
            return state;
        },
    },
});

export const { setName } = userInformationSlice.actions;
export const { setIllegalName } = userInformationSlice.actions;
export default userInformationSlice.reducer;