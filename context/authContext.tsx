// import axios from "axios";
// import React, { createContext, ReactNode, useEffect, useState } from "react";

// import { clearTokens, getRefreshToken, setTokens } from "../auth/authStore";

// // =========================
// // TYPES
// // =========================

// // shape of your user object
// interface User {
//   loggedIn: boolean;
//   userId?: string;
// }

// // context value type
// interface AuthContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   loading: boolean;
// }

// // response from backend /refresh
// interface RefreshResponse {
//   newAccessToken: string;
//   newRefreshToken: string;
//   userId?: string; // optional depending on backend
// }

// // =========================
// // CONTEXT
// // =========================
// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined
// );

// // =========================
// // PROVIDER PROPS
// // =========================
// interface AuthProviderProps {
//   children: ReactNode;
// }

// // =========================
// // PROVIDER
// // =========================
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const bootstrap = async () => {
//     console.log("BOOTSTRAP START");

//     try {
//       const refreshToken = await getRefreshToken();

//       console.log("refreshToken: " + refreshToken);

//       if (!refreshToken) {
//         setLoading(false);
//         return;
//       }

//       const res = await axios.post<RefreshResponse>(
//         "http://10.117.163.20:8083/auth/refresh",
//         { token: refreshToken }
//       );

//       console.log("bootstrap");
//       console.log(res.data);

//       const { newAccessToken, newRefreshToken, userId } = res.data;

//       await setTokens(newAccessToken, newRefreshToken);

//       setUser({
//         loggedIn: true,
//         userId,
//       });
//     } catch (error) {
//       console.log("BOOTSTRAP ERROR", error);

//       await clearTokens();
//       setUser(null);
//     } finally {
//       console.log("BOOTSTRAP END");

//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     bootstrap();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { registerLogoutHandler, registerUserHandler } from "@/auth/authEvents";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { clearTokens, getRefreshToken } from "../auth/authStore";
// import { registerLogoutHandler } from "../auth/authEvents";

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
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}

// =========================
// CONTEXT
// =========================
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

// =========================
// PROVIDER
// =========================
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const bootstrap = async () => {
    console.log("BOOTSTRAP START");

    try {
      const refreshToken = await getRefreshToken();

      console.log("refreshToken:", refreshToken);

      if (refreshToken) {
        // optimistic login
        setUser({ id: "temp", email: "", name: "" });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("BOOTSTRAP ERROR", error);
      await clearTokens();
      setUser(null);
    } finally {
      console.log("BOOTSTRAP END");
      setLoading(false);
    }
  };

  useEffect(() => {
    bootstrap();

    // register logout handler for axios
    registerLogoutHandler(async () => {
      await clearTokens();
      setUser(null);
    });

    registerUserHandler((userData) => {
      setUser(userData);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
