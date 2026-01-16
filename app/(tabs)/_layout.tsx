import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

const TabsLayout = () => {
  const { colorScheme } = useColorScheme();
  const tabBg = colorScheme == "dark" ? "#162032f2" : "#fffffff5";
  const tabBarActiveTintColor = colorScheme == "dark" ? "#00ffd1" : "#06b6d4";
  const tabBarInactiveTintColor = colorScheme == "dark" ? "#94a3b8" : "#6b7280";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBg,
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
