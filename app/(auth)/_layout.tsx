import { useAuth } from "@/context/useAuth";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  // ⛔ Wait for auth to finish
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // ✅ If already logged in → go to app
  if (user) {
    return <Redirect href="/(tabs)/dashboard" />;
  }

  // ✅ Otherwise → allow login screens
  return <Stack screenOptions={{ headerShown: false }} />;
}
