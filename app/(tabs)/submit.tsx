import FormDateTimeInput from "@/components/formDateTimeInput";
import FormPickerInput from "@/components/formPickerInput";
import FormTextInput from "@/components/formTextInput";
import ThemeToggler from "@/components/themeToggler";
import { airdropFormType, airdropSchema } from "@/schemas/airdropSchema";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import data from "../../data/category.json";

const Submit = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const { colorScheme } = useColorScheme();

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
      startDate: undefined,
      endDate: undefined,
      startAlarm: undefined,
      endAlarm: undefined,
    },
  });

  const onSubmit = (data: airdropFormType) => console.log(data);

  return (
    <View className="flex-1 bg-[#f7f9ff] dark:bg-[#0b1020]">
      <View
        className="flex-row gap-4 pb-4 items-center border-b border-[#e5e6e8] px-5 bg-[#f8fafc] dark:bg-[#0f1026] dark:border-b-0"
        style={{ paddingTop: insets.top + 20 }}
      >
        <Pressable
          className="px-3 py-3 bg-white dark:bg-[#0e1626] rounded-lg shadow-black elevation-sm"
          onPress={() => router.push("/dashboard")}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={colorScheme == "dark" ? "#e6f0ff" : "black"}
          />
        </Pressable>
        <Text className="font-spaceBold text-2xl dark:text-[#e6f0ff]">
          Add Airdrop
        </Text>
      </View>
      <View className="flex-1 pt-6 px-5 pb-3">
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

            <View className="flex-row gap-4 items-center">
              <FormDateTimeInput
                control={control}
                name="startDate"
                label="start date"
                mode="date"
                required={true}
              />
              <FormDateTimeInput
                control={control}
                name="endDate"
                label="Target end"
                mode="date"
              />
            </View>

            <View className="flex-row gap-4 mt-1">
              <FormDateTimeInput
                control={control}
                name="startAlarm"
                label="start alarm"
                mode="time"
              />

              <FormTextInput
                name="repeat"
                label="Repeat"
                control={control}
                keyboardType="numeric"
                // fieldStyles="h-10"
                placeholder="No of hours"
              />
            </View>

            <FormTextInput
              name="notes"
              label="notes"
              iconName="note-text-outline"
              textbox={true}
              fieldStyles="h-36 font-spaceRegular lowercase"
              control={control}
              placeholder="Add strategies, bridge links, or reminders here..."
            />
          </View>
          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-[#1bcfb4] dark:bg-[#00ffd1] py-4 rounded-xl mb-4 mt-2"
          >
            <Text className="text-center text-[#001018] font-spaceBold text-lg">
              Save Airdrop
            </Text>
          </Pressable>
        </ScrollView>
      </View>

      <ThemeToggler />
      <StatusBar style="auto" />
    </View>
  );
};

export default Submit;
