import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, View } from "react-native";

type settingsCardProp = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  iconName: any;
  iconColor: string;
  iconBg: string;
  iconSource: string;
  styles?: string;
};

const SettingsCard = ({ ...card }: settingsCardProp) => {
  return (
    <View
      className={`${card.styles} flex-row justify-between bg-white py-5 px-3 items-center`}
    >
      {/* left */}
      <View className="flex-row items-center gap-3 ">
        <View
          className=" px-2 py-2 rounded-xl "
          style={{ backgroundColor: card.iconBg }}
        >
          {card.iconSource == "material" ? (
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
          <Text className="font-spaceBold text-lg capitalize">
            {card.title}
          </Text>
          {card.subtitle && (
            <Text className="font-spaceRegular text-[#8b93b8]">
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
