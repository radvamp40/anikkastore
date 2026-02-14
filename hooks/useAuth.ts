import { useLoginMutation, useSignupMutation } from "@/store/api/auth/auth.api";
import { LoginRequestI, SignupRequestI } from "@/store/api/auth/types";
import { useAuthStore } from "@/store/state/auth-store/auth.store";
import { clearTokens, setTokens } from "@/utils/token.utils";

export function useAuth() {
  const { setUser, signout: clearUser } = useAuthStore();

  const [loginMutation, loginStatus] = useLoginMutation();
  const [signupMutation, signupStatus] = useSignupMutation();

  const login = async (payload: LoginRequestI) => {
    const data = await loginMutation(payload).unwrap();

    setTokens(data.accessToken, data.refreshToken);

    // Store user info in Zustand + localStorage
    setUser({
      id: data.id,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      gendor: data.gendor,
      image: data.image,
    });

    return data;
  };

  const signup = async (payload: SignupRequestI) => {
    const data = await signupMutation(payload).unwrap();

    setTokens(data.accessToken, data.refreshToken);

    // Store user info in Zustand + localStorage
    setUser({
      id: data.id,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      gendor: data.gendor,
      image: data.image,
    });

    return data;
  };

  const logout = () => {
    clearTokens();
    clearUser();
  };

  return { login, signup, logout, loginStatus, signupStatus };
}
