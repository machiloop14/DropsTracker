import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";

const ToggleSwitch = () => {
  const { colorScheme } = useColorScheme();
  const [isToggled, setIsToggled] = useState(true);

  return (
    <MaterialCommunityIcons
      name={isToggled ? "toggle-switch" : "toggle-switch-off-outline"}
      size={40}
      color={colorScheme == "light" ? "#1bcfb4" : "#00ffd1"}
      onPress={() => {
        setIsToggled(!isToggled);
        // console.log(isToggled);
      }}
    />
  );
};

export default ToggleSwitch;
