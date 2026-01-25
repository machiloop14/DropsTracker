import { statusColorFunction } from "@/utils/statusColorFunction";
import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, Text, View } from "react-native";

type reminderField = {
  name: string;
  category: string;
  due: string;

  attention: boolean;
  status: string;
};

type ReminderProps = {
  data: reminderField;
};

const ReminderCard = ({ data }: ReminderProps) => {
  const { colorScheme } = useColorScheme();

  const { bgColor, textColor } = statusColorFunction(data.status, colorScheme);

  return (
    <View className="bg-white dark:bg-[#0f1726]  rounded-lg px-4 border dark:border-0 border-[#ebebeb] my-1.5">
      {/* top */}
      <View className="flex-row justify-between items-start py-4 border-b border-[#ebebeb] dark:border-b-0">
        <View>
          <Text className="text-[#0b1330] dark:text-[#e6f0ff] font-spaceBold text-lg ">
            {data.name}
          </Text>
          <Text className="text-[#8b93b8] dark:text-[#9aa7c7]">
            {data.category}
          </Text>
        </View>
        <View
          className="px-2 py-1.5 rounded-md"
          style={{ backgroundColor: bgColor }}
        >
          <Text
            className=" font-spaceSemibold text-sm capitalize "
            style={{ color: textColor }}
          >
            {data.due}
          </Text>
        </View>
      </View>
      {/* bottom */}
      <View className="py-5 flex-row  gap-3 ">
        <Pressable className="items-center py-2.5 flex-1 border border-[#ebebeb]  dark:border-0 rounded-lg">
          <Text className="font-spaceSemibold text-base text-[#0b1330] dark:text-[#e6f0ff] capitalize ">
            snooze
          </Text>
        </Pressable>
        <Pressable className="items-center py-2.5 flex-1 bg-[#1bcfb4] dark:bg-[#00ffd1] rounded-lg">
          <Text className="font-spaceSemibold text-base text-[#0b1330]  capitalize">
            mark done
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReminderCard;
