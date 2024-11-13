import { configureStore } from "@reduxjs/toolkit";
import userInformationSlice from "./features/userInformationSlice";

export const store = configureStore({
    reducer: {
        userInformation: userInformationSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;