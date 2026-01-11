import { Stack } from "expo-router";
import "../global.css";
import { useEffect } from "react";
import { configureGoogleSignIn } from "@/lib/googleSignInConfig";

export default function RootLayout() {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);
  return <Stack />;
}
