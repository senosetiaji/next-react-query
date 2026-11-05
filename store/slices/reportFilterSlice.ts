
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// 1. Mendefinisikan tipe data filter
interface ReportFilterState {
  year: number;
  month: number;
}

// 2. Initial state
const initialState: ReportFilterState = {
  year: 2026,
  month: 11,
};

// 3. Membuat Redux Slice
const reportFilterSlice = createSlice({
  name: "reportFilter",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },

    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },

    resetFilter: () => initialState,
  },
});

export const { setYear, setMonth, resetFilter } =
  reportFilterSlice.actions;

export default reportFilterSlice.reducer;
