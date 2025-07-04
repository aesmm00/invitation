export interface RSVPState {
  names: string[];
  email: string;
  attending: string;
  allergies: string;
  message: string;
  submitted: boolean;
  submitting: boolean;
  error: string | null;
}

export interface UpdateFieldPayload {
  field: keyof RSVPState;
  value: string;
  index?: number;
}
