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
    <View className="bg-white  rounded-lg px-4 border border-[#ebebeb] my-1.5">
      {/* top */}
      <View className="flex-row justify-between items-start py-4 border-b border-[#ebebeb] ">
        <View>
          <Text className="text-[#0b1330] font-spaceBold text-lg ">
            {data.name}
          </Text>
          <Text className="text-[#8b93b8]">{data.category}</Text>
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
        <Pressable className="items-center py-2.5 flex-1 border border-[#ebebeb] rounded-lg">
          <Text className="font-spaceSemibold text-base text-[#0b1330] capitalize ">
            snooze
          </Text>
        </Pressable>
        <Pressable className="items-center py-2.5 flex-1 bg-[#00e5c4] rounded-lg">
          <Text className="font-spaceSemibold text-base text-[#0b1330]  capitalize">
            mark done
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReminderCard;
