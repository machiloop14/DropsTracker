// import { configureGoogleSignIn } from "@/lib/googleSignInConfig";
// import {
//   SpaceGrotesk_300Light,
//   SpaceGrotesk_400Regular,
//   SpaceGrotesk_500Medium,
//   SpaceGrotesk_600SemiBold,
//   SpaceGrotesk_700Bold,
//   useFonts,
// } from "@expo-google-fonts/space-grotesk";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useColorScheme } from "nativewind";
// import { useEffect, useState } from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { ToastProvider } from "react-native-toast-notifications";
// import "../global.css";

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const { colorScheme, setColorScheme } = useColorScheme();
//   const [isReady, setIsReady] = useState<true | false>(false);

//   const [loaded, error] = useFonts({
//     SpaceGrotesk_300Light,
//     SpaceGrotesk_400Regular,
//     SpaceGrotesk_500Medium,
//     SpaceGrotesk_600SemiBold,
//     SpaceGrotesk_700Bold,
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   useEffect(() => {
//     const initTheme = async () => {
//       // await AsyncStorage.removeItem("THEME_KEY"); // FOR TESTING PURPOSES: RESET APP TO USE SYSTEM THEME

//       const storedTheme = await AsyncStorage.getItem("THEME_KEY");

//       console.log("storedTheme: " + storedTheme);

//       if (
//         storedTheme == "light" ||
//         storedTheme == "dark" ||
//         storedTheme == "system"
//       ) {
//         setColorScheme(storedTheme);
//       } else {
//         setColorScheme("system");
//       }

//       setIsReady(true);
//     };

//     initTheme();
//     configureGoogleSignIn();
//   }, []);
//   //prevents flicker
//   if (!loaded && !error) {
//     return null;
//   }
//   if (!isReady) return null;

//   return (
//     <ToastProvider>
//       <SafeAreaProvider>
//         <Stack screenOptions={{ headerShown: false }} />
//       </SafeAreaProvider>
//     </ToastProvider>
//   );
// }

import { configureGoogleSignIn } from "@/lib/googleSignInConfig";
import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import "../global.css";

import { Stack } from "expo-router";
import { AuthProvider } from "../context/authContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { setColorScheme } = useColorScheme();
  const [isReady, setIsReady] = useState(false);

  const [loaded, error] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const initTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("THEME_KEY");

      if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "system"
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

  if (!loaded && !error) return null;
  if (!isReady) return null;

  return (
    <AuthProvider>
      <ToastProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
