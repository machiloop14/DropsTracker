import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

type props = {
  name: string;
  label: string;
  placeholder?: string;
  fieldStyles?: string;
  textbox?: boolean;
  iconName?: any;
  keyboardType?: any;
  required?: boolean;
  control: Control<any>;
};

const FormTextInput = ({
  control,
  name,
  label,
  fieldStyles,
  placeholder,
  iconName,
  textbox,
  required,
  keyboardType,
}: props) => {
  return (
    <View>
      <View className="flex-row items-center gap-1.5">
        <Text className="uppercase font-spaceSemibold text-[#8b93b8] text-sm">
          {label}
        </Text>
        {required && <Text className="text-red-500">*</Text>}
      </View>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <View
              className={`border bg-white border-[#ebebeb] rounded-xl px-3 py-1.5 h-auto mb-1 mt-2 flex-row gap-2 ${textbox ? "items-baseline" : "items-center"}`}
            >
              {iconName && (
                <MaterialCommunityIcons
                  name={iconName}
                  color="#8b93b8"
                  size={20}
                />
              )}
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="#a2a9c6"
                textAlignVertical="top"
                multiline={true}
                numberOfLines={7}
                onChangeText={onChange}
                autoCorrect={false}
                className={`outline-none font-spaceMedium flex-auto text-[#0b1330]  ${fieldStyles}  ${textbox ? "lowercase" : "capitalize"} `}
                value={value}
                keyboardType={keyboardType}
              />
            </View>
            {error && <Text className="text-red-500">{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default FormTextInput;
