import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: 0,
  currentId: '',
  id: '',
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    replaceQueue: (state, action) => {
      state.list = action.payload.songs;
      state.current = action.payload.i || 0;
      state.currentId = action.payload.id || state.list[0].id;
    },
    changeCurrent: (state, action) => {
      state.current = action.payload.i;
      state.currentId = action.payload.id;
    },
    nextSong: (state) => {
      if (state.list.length - 1 === state.current) {
        state.current = 0;
        state.currentId = state.list[0].id;
      } else {
        state.current += 1;
        state.currentId = state.list[state.current].id;
      }
    },
    prevSong: (state) => {
      if (0 === state.current) {
        state.current = state.list.length - 1;
        state.currentId = state.list[state.current].id;
      } else {
        state.current -= 1;
        state.currentId = state.list[state.current].id;
      }
    },
    // Experimental: Remove reducers above
    // Should only replace the list
    exReplaceQueue: {
      reducer: (state, action) => {
        state.id = action.payload.id;
        state.list = action.payload.list;
      },
      prepare: (id, list) => {
        return {
          payload: {
            id,
            list,
          },
        };
      },
    },
    exChangeCurrent: (state, action) => {
      const index = action.payload;

      state.current = index;
      state.currentId = state.list[index].id;
    },
  },
});

// Selectors
export const selectQueueId = (state) => state.queue.id;
export const selectQueueCurrentId = (state) => state.queue.currentId;

export const {
  replaceQueue,
  changeCurrent,
  nextSong,
  prevSong,
  exReplaceQueue,
  exChangeCurrent,
} = queueSlice.actions;
export default queueSlice.reducer;
