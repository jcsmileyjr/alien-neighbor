import { configureStore } from "@reduxjs/toolkit";
import userInformationSlice from "./features/userInformationSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        userInformation: userInformationSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use to hook into the store and access the state directly
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;