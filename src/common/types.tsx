type Picture = {
  large?: string;
  medium?: string;
  thumbnail?: string;
};

type Name = {
  title?: string;
  last?: string;
  first?: string;
};

type Address = {
  city?: string;
  state?: string;
  country?: string;
};

type Dob = {
  date?: string;
};
export type RowData = {
  picture: Picture;
  name: Name;
  email: string;
  location: Address;
  cell: string;
  gender: string;
  dob: Dob;
};
