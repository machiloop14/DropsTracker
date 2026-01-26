import SettingsCard from "@/components/settingsCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Settings = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 20 }}
      className="flex-1 px-5 bg-[#f7f9ff] dark:bg-[#0b1020] justify-between"
    >
      <View>
        {/* header */}
        <View className="border-b border-[#ebebeb] pb-4 dark:border-b-0 ">
          <Text className=" font-spaceBold text-2xl dark:text-[#e6f0ff]">
            Reminders
          </Text>
        </View>
        {/* header */}

        {/* main content */}
        <View className="mt-6 gap-10">
          {/* preferences */}
          <View>
            <Text className="uppercase text-[#8b93b8]  text-base font-spaceMedium dark:text-white ">
              preferences{" "}
            </Text>
            <View className="rounded-2xl overflow-hidden">
              <SettingsCard
                title="notifications"
                subtitle="Alerts & reminders"
                iconName="bell-outline"
                iconColor="#1bcfb4"
                iconBg="#efeffe"
                iconSource="material"
                styles="border-b border-b-[#ebebeb]"
              >
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color="#8b93b8"
                />
              </SettingsCard>
              <SettingsCard
                title="dark mode"
                iconName="moon-outline"
                iconColor="#a855f7"
                iconBg="#f6eefe"
                iconSource="ionicon"
              >
                <MaterialCommunityIcons
                  name="toggle-switch"
                  size={40}
                  color="#1bcfb4"
                />
              </SettingsCard>
            </View>
          </View>

          {/* data management */}
          <View>
            <Text className="uppercase text-[#8b93b8] text-base font-spaceMedium dark:text-white">
              Data Management{" "}
            </Text>
            <View className="rounded-2xl overflow-hidden">
              <SettingsCard
                title="Backup & Sync"
                subtitle="Last synced: 2m ago"
                iconName="cloud-outline"
                iconColor="#1bcfb4"
                iconBg="#e8f9ef"
                iconSource="material"
                styles="border-b border-b-[#ebebeb]"
              >
                <MaterialCommunityIcons
                  name="toggle-switch"
                  size={40}
                  color="#1bcfb4"
                />
              </SettingsCard>
              <SettingsCard
                title="Export Data"
                iconName="file-code-outline"
                iconColor="#ef4444"
                iconBg="#fdecec"
                iconSource="material"
              >
                <AntDesign name="download" size={20} color="#8b93b8" />
              </SettingsCard>
            </View>
          </View>

          {/* account */}
          <View>
            <Text className="uppercase text-[#8b93b8] text-base font-spaceMedium dark:text-white">
              Account{" "}
            </Text>
            <View className="rounded-2xl overflow-hidden">
              <SettingsCard
                title="Alex Farmer"
                subtitle="alex@crypto.mail"
                iconName="person-outline"
                iconColor="#1bcfb4"
                iconBg="#efeffe"
                iconSource="ionicons"
                styles="border-b border-b-[#ebebeb]"
              >
                <Pressable className="bg-[#fdecec] px-4 py-2 rounded-md">
                  <Text className="font-spaceRegular text-[#ef4444]">
                    Log out
                  </Text>
                </Pressable>
              </SettingsCard>
            </View>
          </View>
        </View>
        {/* main content */}
      </View>
      <Text className="mb-4 text-center text-[#8b93b8]">
        Airdrop Tracker v1.0.0
      </Text>
      {/* <ThemeToggler /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Settings;
