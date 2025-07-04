import { configureStore } from '@reduxjs/toolkit';
import rsvpReducer from './rsvp/slice';
import eighteensReducer from './eighteens/slice';

export const store = configureStore({
  reducer: {
    rsvp: rsvpReducer,
    eighteens: eighteensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
