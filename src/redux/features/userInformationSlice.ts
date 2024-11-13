import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    user_name: string
}

const initialState: User = {
    user_name: "",
}

export const userInformationSlice = createSlice({
    name: "userInformation",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.user_name = action.payload;
            return state;
        },
    },
});

export const { setName } = userInformationSlice.actions;
export default userInformationSlice.reducer;