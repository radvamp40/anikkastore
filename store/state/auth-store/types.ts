import { UserI } from "@/types/user.types";

export interface AuthStateI {
  user: UserI | null;
  isAuthenticated: boolean
  setUser: (user: UserI) => void
  signout: () => void
  hydrateUser: () => void
}