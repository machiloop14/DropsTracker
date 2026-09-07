import SettingsCard from "@/components/settingsCard";
import ToggleSwitch from "@/components/toggleSwitch";
import { useAuth } from "@/context/useAuth";
import { useToastNotification } from "@/hooks/useToastNotifications";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Settings = () => {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  const toast = useToastNotification();

  const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);

  const { colorScheme } = useColorScheme();

  return (
    <View
      style={{ paddingTop: insets.top + 20 }}
      className="flex-1 px-5 bg-[#f7f9ff] dark:bg-[#0b1020] justify-between"
    >
      <Modal
        visible={logoutModalVisible}
        className="w-8 h-8 absolute top-1/2 left-1/2"
        transparent={true}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-white flex gap-2 px-2 py-2">
            <View>
              <Text className="text-dark text-center">Confirm Logout</Text>
            </View>
            <View className="flex flex-row gap-2">
              <Pressable className="bg-red-400 px-4 py-2">
                <Text>Cancel</Text>
              </Pressable>
              <Pressable className="bg-blue-400 px-4 py-2">
                <Text>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        {/* header */}
        <View className="border-b border-[#ebebeb] pb-4 dark:border-b-0 ">
          <Text className=" font-spaceBold text-2xl dark:text-[#e6f0ff]">
            Reminders
          </Text>
        </View>
        {/* header */}

        {/* main content */}
        <View className="mt-6 gap-6">
          {/* preferences */}
          <View className="gap-2">
            <Text className="uppercase text-[#8b93b8]  text-base font-spaceMedium dark:text-white ">
              preferences{" "}
            </Text>
            <View className="rounded-2xl overflow-hidden">
              <SettingsCard
                title="notifications"
                subtitle="Alerts & reminders"
                iconName="bell-outline"
                iconColor={colorScheme == "light" ? "#1bcfb4" : "#00ffd1"}
                iconBg={colorScheme == "light" ? "#efeffe" : "#171f3b"}
                iconSource="material"
                styles="border-b border-b-[#ebebeb] dark:border-b-0"
              >
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={colorScheme == "light" ? "#8b93b8" : "#9aa7c7"}
                />
              </SettingsCard>
              <SettingsCard
                title="dark mode"
                iconName="moon-outline"
                iconColor="#a855f7"
                iconBg={colorScheme == "light" ? "#f6eefe" : "#1e1e3b"}
                iconSource="ionicon"
              >
                <ToggleSwitch />
              </SettingsCard>
            </View>
          </View>

          {/* data management */}
          <View className="gap-2">
            <Text className="uppercase text-[#8b93b8] text-base font-spaceMedium dark:text-white">
              Data Management{" "}
            </Text>
            <View className="rounded-2xl overflow-hidden">
              <SettingsCard
                title="Backup & Sync"
                subtitle="Last synced: 2m ago"
                iconName="cloud-outline"
                iconColor={colorScheme == "light" ? "#1bcfb4" : "#22c55e"}
                iconBg={colorScheme == "light" ? "#e8f9ef" : "#10292c"}
                iconSource="material"
                styles="border-b border-b-[#ebebeb] dark:border-b-0"
              >
                <ToggleSwitch />
              </SettingsCard>
              <SettingsCard
                title="Export Data"
                iconName="file-code-outline"
                iconColor={colorScheme == "light" ? "#ef4444" : "#e94343"}
                iconBg={colorScheme == "light" ? "#fdecec" : "#251c29"}
                iconSource="material"
              >
                <AntDesign
                  name="download"
                  size={20}
                  color={colorScheme == "light" ? "#8b93b8" : "#9aa7c7"}
                />
              </SettingsCard>
            </View>
          </View>

          {/* account */}
          <View className="gap-2">
            <Text className="uppercase text-[#8b93b8] text-base font-spaceMedium dark:text-white">
              Account{" "}
            </Text>
            {user && (
              <View className="rounded-2xl overflow-hidden">
                <SettingsCard
                  title={user.name}
                  subtitle={user.email}
                  imgSource="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F3"
                >
                  <Pressable
                    className="bg-[#fdecec] dark:bg-[#251c29] px-4 py-2 rounded-md"
                    onPress={() => setLogoutModalVisible(true)}
                  >
                    <Text className="font-spaceSemibold text-[#ef4444] dark:text-[#ee5074] text-base ">
                      Log out
                    </Text>
                  </Pressable>
                </SettingsCard>
              </View>
            )}
          </View>
        </View>
        {/* main content */}
      </View>
      <Text className="mb-4 text-center text-[#8b93b8] dark:text-[#9aa7c7]">
        Airdrop Tracker v1.0.0
      </Text>
      {/* <ThemeToggler /> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Settings;
