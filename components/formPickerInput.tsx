import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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

  return (
    <View>
      <View className="flex-row items-center gap-1.5">
        <Text className="uppercase font-spaceSemibold text-[#8b93b8] text-sm">
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
            <View className="flex  basis-auto px-3 py-1.5 mt-2 bg-white rounded-xl border border-[#ebebeb]">
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "#ebebeb" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
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
                    color="#8b93b8"
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

      {/* <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#ebebeb" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Category" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name="tag-outline"
              size={20}
              style={styles.icon}
              color="#8b93b8"
            />
          )}
        /> */}
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
    color: "#0b1330",
    fontFamily: "SpaceGrotesk_400Regular",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#0b1330",
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
