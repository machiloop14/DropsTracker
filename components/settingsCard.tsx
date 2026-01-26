import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, Text, View } from "react-native";

type settingsCardProp = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  iconName?: any;
  iconColor?: string;
  iconBg?: string;
  iconSource?: string;
  styles?: string;
  imgSource?: string;
};

const SettingsCard = ({ ...card }: settingsCardProp) => {
  return (
    <View
      className={`${card.styles} flex-row justify-between bg-white dark:bg-[#0f1726] py-5 px-3 items-center`}
    >
      {/* left */}
      <View className="flex-row items-center gap-3 ">
        <View
          className=" px-2 py-2 rounded-xl "
          style={{ backgroundColor: card.iconBg }}
        >
          {card.imgSource ? (
            <Image
              source={{ uri: card.imgSource }}
              width={30}
              height={30}
              className="rounded-full"
            />
          ) : card.iconSource == "material" ? (
            <MaterialCommunityIcons
              name={card.iconName}
              size={20}
              color={card.iconColor}
            />
          ) : (
            <Ionicons name={card.iconName} size={20} color={card.iconColor} />
          )}
        </View>
        <View>
          <Text className="font-spaceBold text-lg capitalize dark:text-[#e6f0ff]">
            {card.title}
          </Text>
          {card.subtitle && (
            <Text className="font-spaceRegular text-[#8b93b8] dark:text-[#9aa7c7]">
              {card.subtitle}
            </Text>
          )}
        </View>
      </View>
      {/* right */}
      {card.children}
    </View>
  );
};

export default SettingsCard;
