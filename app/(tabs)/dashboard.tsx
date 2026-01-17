import ThemeToggler from "@/components/themeToggler";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Dashboard = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="bg-[#f2f3fe] dark:bg-[#0b1020] flex-1 px-5"
    >
      {/* header */}
      <View className="flex flex-row justify-between items-center pt-8 pb-2">
        <View className="flex-row gap-2 items-center">
          <View className="bg-[#06b6d4] dark:bg-[#00ffd1] px-[5px] py-[5px] rounded-md">
            <MaterialCommunityIcons
              name="cube-outline"
              size={18}
              color={colorScheme == "dark" ? "black" : "white"}
            />
          </View>
          <Text className="text-[#0f1721] dark:text-white font-spaceBold text-2xl">
            AirTrack
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <View className="bg-white dark:bg-[#1e293b] px-[5px] py-[5px] rounded-md">
            <MaterialCommunityIcons
              name="filter-outline"
              size={22}
              color={colorScheme == "dark" ? "#f8fafc" : "#6b7280"}
            />
          </View>
          <View className="bg-white dark:bg-[#1e293b] px-[5px] py-[5px] rounded-md">
            {/* <MaterialCommunityIcons
              name="bell-outline"
              size={20}
              color="#6b7280"
            /> */}
            <ThemeToggler />
          </View>
        </View>
      </View>
      {/* summary section */}
      <View className="flex-row justify-between w-full  pt-2">
        <View className="bg-white dark:bg-[#0f1726] w-[47%] py-4 px-3 rounded-lg gap-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-spaceRegular text-sm  text-[#6b7280] dark:text-[#e6e9ff]">
              Tasks due
            </Text>
            <MaterialCommunityIcons
              name="clock-outline"
              color="#f59e0b"
              size={14}
            />
          </View>
          <Text className="text-[#06b6d4] dark:text-[#00ffd1] font-spaceBold text-2xl">
            12
          </Text>
        </View>
        <View className="bg-white dark:bg-[#0f1726] w-[47%] py-4 px-3 rounded-lg gap-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-spaceRegular text-sm  text-[#6b7280] dark:text-[#e6e9ff]">
              Total drops
            </Text>
            <Ionicons name="sparkles-outline" color="#8b5cf6" size={14} />
          </View>
          <Text className="text-[#06b6d4] dark:text-[#00ffd1] font-spaceBold text-2xl">
            24
          </Text>
        </View>
      </View>

      {/* Drops List */}
      <View className="flex-1">
        <View className="flex-row justify-between items-center pt-6">
          <Text className="text-base text-[#020617] dark:text-[#e6f0ff] font-spaceBold">
            Active Drops
          </Text>
          <Text className="text-sm text-[#06b6d4] dark:text-[#00ffd1] font-spaceMedium">
            View all
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mt-4 bg-white dark:bg-[#0f1726] border-l-2 border-[#f59e0b] px-2.5 rounded-xl">
            <View className="flex-row justify-between items-center py-4">
              <View>
                <Text className="font-spaceBold text-base text-[#020617] dark:text-white">
                  zkSync Era
                </Text>
                <View className="bg-[#06b6d414] dark:bg-[##102b3a] p-1 rounded-md font-spaceSemibold">
                  <Text
                    className="font-spaceRegular text-xs text-[#06b6d4]
                  dark:text-[#00ffd1] uppercase"
                  >
                    Bridge & Swap
                  </Text>
                </View>
              </View>
              <AnimatedCircularProgress
                size={30}
                width={4}
                fill={75}
                rotation={0}
                tintColor={colorScheme == "dark" ? "#00ffd1" : "#06b6d4"}
                backgroundColor={colorScheme == "dark" ? "#2b1f4a" : "#e2e8f0"}
              >
                {() => (
                  <Text className="font-spaceBold text-[10px] text-[#020617] dark:text-[#e6f0ff] ">
                    {75}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
            <View className="flex-row justify-between py-2.5 border-t border-[#e2e8f0cc]">
              <View className="flex-row gap-2 items-center">
                <View className="w-2 h-2 bg-[#f49e0b] rounded-full"></View>
                <Text className="text-base font-spaceRegular text-[#020617] dark:text-white">
                  Due in 2h
                </Text>
              </View>
              <Text className="font-spaceRegular text-xs text-[#6b7280] dark:text-[#e6e9ff]">
                Weekly
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* status bar */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Dashboard;
