import React from "react";
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

type props = {
  name: string;
  control: Control<any>;
};

const FormTextInput = ({ control, name }: props) => {
  return (
    <View>
      <Text className="uppercase font-spaceSemibold text-[#8b93b8]">
        {name}
      </Text>
      <Controller
        name="projectName"
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              className="border border-blue-200 rounded-lg outline-none px-3 mb-1 mt-2"
              value={value}
            />
            {error && <Text className="text-red-500">{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default FormTextInput;
