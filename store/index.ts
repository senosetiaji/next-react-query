
import { configureStore } from "@reduxjs/toolkit";
import reportFilterReducer from "./slices/reportFilterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      reportFilter: reportFilterReducer,
    },
  });
};

// TypeScript types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
