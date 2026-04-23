import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../api/api";
import { clearTokens, getRefreshToken, setTokens } from "../auth/authStore";

// =========================
// TYPES
// =========================
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (idToken: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

// =========================
// CONTEXT
// =========================
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// =========================
// PROVIDER
// =========================
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // BOOTSTRAP
  // =========================
  const bootstrap = async () => {
    try {
      const refreshToken = await getRefreshToken();
      console.log("CONTEXT REFRESH TOKEN: " + refreshToken);

      if (!refreshToken) {
        setUser(null);
        return;
      }

      // 🔥 Fetch real user
      const res = await api.get("/auth/me");
      console.log("context res: " + res.data.name);

      setUser(res.data);
    } catch (error) {
      console.log("BOOTSTRAP ERROR", error);
      await clearTokens();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bootstrap();
  }, []);

  // =========================
  // LOGIN
  // =========================
  const login = async (idToken: string) => {
    const res = await api.post("/auth/login", {
      idToken,
    });

    if (!res.data.success) return false;

    const data = res.data.data;

    console.log(data.accessToken, data.refreshToken);

    await setTokens(data.accessToken, data.refreshToken);

    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
      avatar: data.avatar,
    });

    return true;
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = async () => {
    await clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
