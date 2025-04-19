export interface RSVPResponse {
  code: string;
  email: string;
  attending: string;
}

export interface RSVPState {
  responses: RSVPResponse[];
  loading: boolean;
  error: string | null;
}
