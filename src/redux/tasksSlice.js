import { createSlice } from '@reduxjs/toolkit';

const taskInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    updateTaskStatus(state, action) {
      const { id, status } = action.payload;
      const task = state.find(item => item.id === id);
      if (task) task.status = status;
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
