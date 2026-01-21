import FormPickerInput from "@/components/formPickerInput";
import FormTextInput from "@/components/formTextInput";
import ThemeToggler from "@/components/themeToggler";
import { airdropFormType, airdropSchema } from "@/schemas/airdropSchema";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import data from "../../data/category.json";

const Submit = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(airdropSchema),
    defaultValues: {
      projectName: "",
      walletAddress: "",
      notes: "",
      repeat: 0,
      category: "",
    },
  });

  const onSubmit = (data: airdropFormType) => console.log(data);

  return (
    <View className="flex-1 bg-[#f7f9ff]">
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
      <View className="flex-1 pt-6 px-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-4">
            <FormTextInput
              name="projectName"
              label="project name"
              iconName="cube-outline"
              control={control}
              required={true}
            />

            <FormPickerInput
              data={data}
              name="category"
              control={control}
              label="Category/Type"
              required={true}
            />

            <FormTextInput
              name="walletAddress"
              label="Wallet Address"
              iconName="wallet-outline"
              control={control}
              placeholder="0x..."
            />
            <FormTextInput
              name="notes"
              label="notes"
              iconName="note-text-outline"
              textbox={true}
              fieldStyles="h-36 font-spaceRegular lowercase"
              control={control}
              placeholder="Add strategies, bridge links, or reminders here..."
            />
            <FormTextInput
              name="repeat"
              label="Repeat(hours)"
              control={control}
              keyboardType="numeric"
            />
          </View>
        </ScrollView>
        <Button title="submit" onPress={handleSubmit(onSubmit)} />
      </View>

      <ThemeToggler />
      <StatusBar style="auto" />
    </View>
  );
};

export default Submit;
