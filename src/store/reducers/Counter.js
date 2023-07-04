import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCounter } from '@/services/api/upload';
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

const initialState = {
  value: 0,
  status: 'idle'
}
export const incrementAsync = createAsyncThunk('counter/getCounter', async (amount) => {
  const response = await getCounter(amount)
  return response.data;
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers:{
    increment:(state) => {
      state.value += 1
    },
    decrement:(state) => {
      state.value -= 1
    },
    incrementByAmount: (state,action) => {
      state.value += action.payload
    },
    extraReducers: (builder) => {
      builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
    }
  }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export const selectCount = (state) => state.counter.value;
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;