import { getHoursAndMinutes } from "@/utils/formatTime";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";

type props = {
  label: string;
  name: string;
  control: Control<any>;
  mode: "date" | "datetime" | "time";
  required?: boolean;
};

const FormDateTimeInput = ({ label, name, control, mode, required }: props) => {
  const [open, setOpen] = useState(false);
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1">
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View>
              <View className="items-center flex-row gap-1.5">
                <Text className="uppercase font-spaceSemibold text-[#8b93b8] dark:text-white text-sm">
                  {label}
                </Text>
                {required && (
                  <Text className="text-red-500 font-spaceRegular">*</Text>
                )}
              </View>
              <Pressable
                onPress={() => setOpen(true)}
                className="flex-row gap-2 items-center border border-[#ebebeb] bg-white dark:bg-[#0e1626] dark:border-0 py-4  px-3 mt-2 rounded-xl"
              >
                <MaterialCommunityIcons
                  name="calendar-blank-outline"
                  size={20}
                  color={colorScheme == "dark" ? "#99a6bf" : "#8b93b8"}
                />

                {value ? (
                  <Text className="text-[#0b1330] dark:text-[#e1ebfa] font-spaceRegular">
                    {mode == "date"
                      ? value.toLocaleDateString()
                      : getHoursAndMinutes(value)}
                  </Text>
                ) : (
                  <Text className="text-[#a2a9c6] dark:text-[#616c82] font-spaceRegular">
                    {mode == "date" ? "Select Date" : "Select Time"}
                  </Text>
                )}
              </Pressable>
              {error && (
                <Text className="text-red-500 font-spaceRegular">
                  {error.message}
                </Text>
              )}
            </View>
            <DatePicker
              modal
              mode={mode}
              open={open}
              date={value ?? new Date()}
              onConfirm={(date) => {
                setOpen(false);
                onChange(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </>
        )}
      />
    </View>
  );
};

export default FormDateTimeInput;
