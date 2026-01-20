import FormTextInput from "@/components/formTextInput";
import ThemeToggler from "@/components/themeToggler";
import { airdropFormType, airdropSchema } from "@/schemas/airdropSchema";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Submit = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<airdropFormType>({
    resolver: zodResolver(airdropSchema),
    defaultValues: {
      projectName: "",
      walletAddress: "",
      notes: "",
    },
  });

  const onSubmit = (data: airdropFormType) => console.log(data);

  return (
    <View className="flex-1 bg-[#f2f3fe]">
      <View
        className="flex-row gap-4 pb-4 items-center border-b border-[#e5e6e8] px-5 bg-[#f8fafc]"
        style={{ paddingTop: insets.top + 20 }}
      >
        <Pressable
          className="px-3 py-3 bg-white rounded-lg shadow-black elevation-sm"
          onPress={() => router.push("/dashboard")}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </Pressable>
        <Text className="font-spaceBold text-2xl">Add Airdrop</Text>
      </View>
      <View className="flex-1 pt-2 px-5">
        <FormTextInput name="projectName" control={control} />
        <Button title="submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <ThemeToggler />
      <StatusBar style="auto" />
    </View>
  );
};

export default Submit;
