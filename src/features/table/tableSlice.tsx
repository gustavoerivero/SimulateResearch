import { RootState } from "@/src/store";
import { TSimulationRow, TSimulationTable } from "@/src/types/CalculatorValues.Type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TSimulationTable = [];

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<TSimulationRow>) => {
      state.push(action.payload);
    },
    resetTable: (state) => {
      state.length = 0;
    },
    setTable: (state, action: PayloadAction<TSimulationTable>) => {
      state = action.payload;
    }
  }
});

export const { addRow, resetTable, setTable } = tableSlice.actions;

export const getTable = (state: RootState) => state.table;

export default tableSlice.reducer;