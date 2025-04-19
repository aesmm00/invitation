import { configureStore } from '@reduxjs/toolkit';
import rsvpReducer from './rsvp/slice';
import eighteensReducer from './eighteens/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    rsvp: rsvpReducer,
    eighteens: eighteensReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
