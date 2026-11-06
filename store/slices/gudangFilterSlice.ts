
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface gudangFilterState {
  year: number;
  month: number;
  condition?: string;
}

const initialState: gudangFilterState = {
  year: 2026,
  month: 11,
  condition: undefined,
};

const gudangFilterSlice = createSlice({
  name: "gudangFilter",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },

    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },

    setCondition: (state, action: PayloadAction<string | undefined>) => {
      state.condition = action.payload;
    },

    resetFilter: () => initialState,
  },
});

export const { setYear, setMonth, setCondition, resetFilter } =
  gudangFilterSlice.actions;

export default gudangFilterSlice.reducer;
