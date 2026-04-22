import api from "../api/api";
import { setTokens } from "./authStore";

export const login = async (idToken: string) => {
  const res = await api.post("/auth/login", { idToken });

  if (!res.data.success) return;

  const { accessToken, refreshToken } = res.data.data;

  await setTokens(accessToken, refreshToken);

  return res.data;
};
