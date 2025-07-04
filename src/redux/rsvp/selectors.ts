import { RootState } from '../store';

export const selectNames = (state: RootState) => state.rsvp.names;
export const selectEmail = (state: RootState) => state.rsvp.email;
export const selectAttending = (state: RootState) => state.rsvp.attending;
export const selectAllergies = (state: RootState) => state.rsvp.allergies;
export const selectMessage = (state: RootState) => state.rsvp.message;
export const selectSubmitted = (state: RootState) => state.rsvp.submitted;
export const selectSubmitting = (state: RootState) => state.rsvp.submitting;
export const selectError = (state: RootState) => state.rsvp.error;
