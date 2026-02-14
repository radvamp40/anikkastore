import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AuthStateI } from "./types";
import { UserI } from "@/types/user.types";

export const useAuthStore = create<AuthStateI>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,

    setUser: (user) => {
      set({ user, isAuthenticated: true });
      localStorage.setItem("user", JSON.stringify(user))
    },

    signout: () => {
        set({user: null, isAuthenticated: false})
        localStorage.removeItem("user")
    },

    hydrateUser: () => {
        if(typeof window !== "undefined") {
            const userStr = localStorage.getItem("user")
            if(userStr){
                const user: UserI = JSON.parse(userStr)
                set({user, isAuthenticated: true})
             }
        }
    }
  })),
);
