export interface InitialData {
  Name: string;
  "RSVP Status": string;
  Email: string;
  Code: string;
  Message: string;
  Notes: string;
}

export interface UserState {
  initialData: InitialData | null;
  loading: boolean;
  error: string | null;
  codeVerified: boolean;
}
