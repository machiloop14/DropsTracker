import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type dataField = {
  label: string;
  value: string;
};

type pickerData = {
  data: dataField[];
  name: string;
  label: string;
  control: Control<any>;
  required?: boolean;
};

const FormPickerInput = ({
  data,
  name,
  label,
  control,
  required,
}: pickerData) => {
  const [isFocus, setIsFocus] = useState(false);
  const { colorScheme } = useColorScheme();

  const placeholderColor = colorScheme == "dark" ? "#616c82" : "#a2a9c6";
  const selectedTextColor = colorScheme == "dark" ? "#e1ebfa" : "#0b1330";
  const containerBackground = colorScheme == "dark" ? "#181c1f" : "#fff";
  const itemTextColor = colorScheme == "dark" ? "white" : "black";

  return (
    <View>
      <View className="flex-row items-center gap-1.5">
        <Text className="uppercase font-spaceSemibold text-[#8b93b8] dark:text-white text-sm">
          {label}
        </Text>
        {required && <Text className="text-red-500 font-spaceRegular">*</Text>}
      </View>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View className="flex  basis-auto px-3 py-1.5 mt-2 bg-white dark:bg-[#0e1626]  rounded-xl border dark:border-0 border-[#ebebeb]">
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "#ebebeb" }]}
                placeholderStyle={[
                  styles.placeholderStyle,
                  { color: placeholderColor },
                ]}
                selectedTextStyle={[
                  styles.selectedTextStyle,
                  { color: selectedTextColor },
                ]}
                inputSearchStyle={[
                  styles.inputSearchStyle,
                  { color: selectedTextColor },
                ]}
                iconStyle={styles.iconStyle}
                data={data}
                containerStyle={{
                  backgroundColor: containerBackground,
                  borderWidth: 0,
                }}
                activeColor={colorScheme == "dark" ? "#162032f2" : "#f4f4f4"}
                itemTextStyle={{ color: itemTextColor }}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select Category" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  onBlur;
                  setIsFocus(false);
                }}
                onChange={(item) => {
                  onChange(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <MaterialCommunityIcons
                    name="tag-outline"
                    size={20}
                    style={styles.icon}
                    color={colorScheme == "dark" ? "#99a6bf" : "#8b93b8"}
                  />
                )}
              />
            </View>
            {error && (
              <Text className="text-red-500 font-spaceRegular">
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default FormPickerInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "#ebebeb",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  dropdown: {
    height: 40,
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  selectedTextStyle: {
    fontSize: 16,
    // color: "#0b1330",
    fontFamily: "SpaceGrotesk_400Regular",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
