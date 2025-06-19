export type EighteenCategory = 'Roses' | 'Candles' | 'Treasures' | 'BlueBills'  | 'Shots' ;

export interface EighteenPerson {
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface EighteenState {
  data: {
    [key in EighteenCategory]: EighteenPerson[];
  };
  loading: {
    [key in EighteenCategory]: boolean;
  };
  error: {
    [key in EighteenCategory]: string | null;
  };
}
