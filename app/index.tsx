import ThemeToggler from "@/components/themeToggler";
import { signInWithGoogle } from "@/lib/signInWithGoogle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const address = "10.68.82.20";

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      // TODO: send idToken to your backend
      if (res && res.msg == "success") {
        const idToken = res.response.data.idToken;
        console.log(idToken);
        const loginRes = await axios.post(
          `http://${address}:8083/auth/login`,
          { idToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(loginRes.data);
        console.log("log in successful");
        router.push("/dashboard");
      }
      // router.replace("/(tabs)")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message || "server error");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View className="flex-1 items-center px-8 justify-center bg-[#f4f8f8] dark:bg-[#0f0f28] gap-14">
      <View className="items-center gap-4 mx-auto">
        <View className="bg-[#1bcfb4] dark:bg-[#102b3a] px-3 py-3 rounded-2xl dark:border dark:border-[#00e5c4]">
          <MaterialIcons
            name="rocket-launch"
            size={50}
            color={colorScheme == "dark" ? "#00ffd1" : "#fff"}
          />
        </View>
        <Text className="text-[#101f22] dark:text-white font-spaceBold text-4xl">
          Airdrop Tracker
        </Text>
        <Text className="text-[#60838a] dark:text-slate-400 font-spaceRegular text-center text-base">
          Organize and manage your crypto interactions in one place
        </Text>
      </View>
      <View className="gap-8">
        {colorScheme == "dark" ? (
          <Image
            source={require("../assets/images/image-wm.png")}
            className="max-w-full  h-52 rounded-md"
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../assets/images/lightHome.png")}
            className="max-w-full  h-52 rounded-md"
            resizeMode="cover"
          />
        )}
        <Pressable
          className="dark:bg-white flex-row items-center justify-center gap-3 py-4 rounded-xl border border-[#e5e7eb] bg-white dark:border-0"
          onPress={handleGoogleLogin}
        >
          <Image
            source={require("../assets/images/google.png")}
            className="w-6 h-6"
          />
          <Text className="font-spaceBold text-lg">Sign in with Google</Text>
        </Pressable>
      </View>
      <View className="flex-row flex-wrap justify-center">
        <Text className="dark:text-slate-400 text-[#60838a] font-spaceRegular text-sm">
          By continuing, you agree to our{" "}
        </Text>
        <Text
          className="font-spaceSemibold text-sm dark:text-[#1bcfb4] text-black underline dark:no-underline
        "
        >
          Terms of Service
        </Text>
        <Text className="dark:text-slate-400 text-[#60838a] font-spaceRegular text-sm">
          {" "}
          and{" "}
        </Text>
        <Text className=" font-spaceSemibold text-sm dark:text-[#1bcfb4] text-black underline dark:no-underline">
          Privacy Policy.
        </Text>
      </View>
      <View className="absolute top-12 right-8">
        <ThemeToggler />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
