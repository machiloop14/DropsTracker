import { AirdropCardProps } from "@/types/airdropcard";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const colors = ["#ffd166", "#1bcfb4", "#f59e0b", "#06b6d4"];

const AirdropCard = ({ item, index }: AirdropCardProps) => {
  const { colorScheme } = useColorScheme();
  const color = colors[index % 4];

  return (
    <View
      className="mt-5 bg-white dark:bg-[#0f1726] border-l-4 px-2.5 rounded-xl"
      style={{ borderColor: color }}
    >
      <View className="flex-row justify-between items-center py-6">
        <View>
          <Text className="font-spaceBold text-base text-[#020617] dark:text-white">
            {item.name}
          </Text>
          <View className="bg-[#f6f5f3] dark:bg-[#102b3a] p-1 rounded-full px-1.5 py-1.5 font-spaceSemibold">
            <Text
              className=" font-spaceRegular font-space text-xs text-[#009e86]
                      dark:text-[#00ffd1] uppercase "
            >
              {item.type}
            </Text>
          </View>
        </View>
        <AnimatedCircularProgress
          size={30}
          width={4}
          fill={item.percentage}
          rotation={0}
          tintColor={colorScheme == "dark" ? "#00ffd1" : "#1bcfb4"}
          backgroundColor={colorScheme == "dark" ? "#2b1f4a" : "#e2e8f0"}
        >
          {() => (
            <Text className="font-spaceBold text-[10px] text-[#020617] dark:text-[#e6f0ff] ">
              {item.percentage}
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>
      <View className="flex-row justify-between py-3.5 border-t border-[#e2e8f0cc]">
        <View className="flex-row gap-2 items-center">
          <View
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          ></View>
          <Text className="text-base font-spaceRegular text-[#020617] dark:text-white">
            {item.status}
          </Text>
        </View>
        <Text className="font-spaceRegular text-xs text-[#6b7280] dark:text-[#e6e9ff]">
          {item.frequency.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default AirdropCard;
