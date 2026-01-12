import { configureGoogleSignIn } from "@/lib/googleSignInConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import "../global.css";

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isReady, setIsReady] = useState<true | false>(false);

  useEffect(() => {
    const initTheme = async () => {
      // await AsyncStorage.removeItem("THEME_KEY"); // FOR TESTING PURPOSES: RESET APP TO USE SYSTEM THEME

      const storedTheme = await AsyncStorage.getItem("THEME_KEY");

      console.log("storedTheme: " + storedTheme);

      if (
        storedTheme == "light" ||
        storedTheme == "dark" ||
        storedTheme == "system"
      ) {
        setColorScheme(storedTheme);
      } else {
        setColorScheme("system");
      }

      setIsReady(true);
    };

    initTheme();
    configureGoogleSignIn();
  }, []);
  //prevents flicker
  if (!isReady) return null;

  return <Stack />;
}
