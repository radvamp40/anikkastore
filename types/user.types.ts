export interface UserI {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gendor: string;
  image: string;
}

// test commit
export interface VendorDetailsI extends UserI {
  phone: string
}