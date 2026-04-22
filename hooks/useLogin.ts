import api from "../api/api";
import { setTokens } from "../auth/authStore";
import { useAuth } from "../context/useAuth";

export const useLogin = () => {
  const { setUser } = useAuth();

  const login = async (idToken: string) => {
    const res = await api.post("/auth/google", { idToken });

    const data = res.data.data;

    // save tokens
    await setTokens(data.accessToken, data.refreshToken);

    // hydrate user
    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
      avatar: data.avatar,
    });
  };

  return { login };
};
