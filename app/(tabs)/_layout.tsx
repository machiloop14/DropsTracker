import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  // const tabBg = colorScheme == "dark" ? "#162032f2" : "#fffffff5";
  const tabBg = colorScheme == "dark" ? "#0b1020" : "#f7f9ff";
  const tabBarActiveTintColor = colorScheme == "dark" ? "#00ffd1" : "#009e86";
  // const tabBarInactiveTintColor = colorScheme == "dark" ? "#94a3b8" : "#6b7280";
  const tabBarInactiveTintColor = colorScheme == "dark" ? "#9aa7c7" : "#8b93b8";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBg,
          borderColor: "transparent",
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,

          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGrotesk_500Medium",
          },
        }}
      />
      <Tabs.Screen
        name="submit"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,

          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGrotesk_500Medium",
          },
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,

          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGrotesk_500Medium",
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,

          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGrotesk_500Medium",
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
