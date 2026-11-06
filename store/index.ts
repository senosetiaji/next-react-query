import { configureStore } from "@reduxjs/toolkit";
import reportFilterReducer from "./slices/reportFilterSlice";
import gudangFilterReducer from "./slices/gudangFilterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      reportFilter: reportFilterReducer,
      gudangFilter: gudangFilterReducer,
    },
  });
};

// TypeScript types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
