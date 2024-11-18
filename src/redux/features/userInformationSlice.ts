import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/User";

// type User = {
//     user_name: string
//     user_illegal_name?: string
//     user_commute_distance?: string
// }

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
        setCommuteDistance: (state, action: PayloadAction<string>) => {
            state.user_commute_distance = action.payload;
            return state;
        },
    },
});

export const { setName } = userInformationSlice.actions;
export const { setIllegalName } = userInformationSlice.actions;
export const { setCommuteDistance } = userInformationSlice.actions;
export default userInformationSlice.reducer;