import ThemeToggler from "@/components/themeToggler";
import { signInWithGoogle } from "@/lib/signInWithGoogle";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  // const { toggleColorScheme } = useColorScheme();

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      // TODO: send idToken to your backend
      // router.replace("/(tabs)")
      console.log("log in successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        onPress={handleGoogleLogin}
        className="bg-black dark:bg-green-400 px-6 py-3 rounded flex-row items-center gap-2"
      >
        <Image
          source={require("../assets/images/google.png")}
          className="w-6 h-6"
          resizeMode="cover"
        />
        <Text className="text-white">Continue with Google</Text>
      </Pressable>
      {/* <Pressable onPress={() => toggleColorScheme()}>
        <Text>toggle theme</Text>
      </Pressable> */}
      <ThemeToggler />
    </View>
  );
}
