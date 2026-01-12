import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable } from "react-native";

const ThemeToggler = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const handleThemeSwitch = async () => {
    const nextTheme = colorScheme === "dark" ? "light" : "dark";

    setColorScheme(nextTheme);
    // console.log("NextTheme: " + nextTheme);

    await AsyncStorage.setItem("THEME_KEY", nextTheme);
  };

  return (
    <Pressable>
      <MaterialIcons name="sunny" size={24} onPress={handleThemeSwitch} />
    </Pressable>
  );
};

export default ThemeToggler;
