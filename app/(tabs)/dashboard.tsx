import ThemeToggler from "@/components/themeToggler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Dashboard = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Dashboard</Text>
      <ThemeToggler />
      <StatusBar style="auto" />
    </View>
  );
};

export default Dashboard;
