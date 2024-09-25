import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../utils/globalStyle";
import { colors } from "../../styles/colores";

export const TextBox = ({
  control,
  errors,
  name,
  startIcon,
  placeholder,
  required = false,
  helperText,
  keyboardType = "default",
  multiline = false,
  numberOfLines = 1,
  bgColor = "#F6FBFF",
  borderColor = "#E2EEF7",
  endIcon,
}: any) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              Styles.inputContainerStyle,
              {
                borderColor: errors ? "red" : borderColor,
                backgroundColor: bgColor,
              },
              multiline && { height: numberOfLines * 20 + 30 }, // Adjust height based on lines for multiline
            ]}
          >
            {startIcon && startIcon}
            <TextInput
              keyboardType={keyboardType}
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[
                Styles.textInputStyle,
                multiline && Styles.multilineStyle, // Apply additional multiline styling if needed
              ]}
              placeholderTextColor={colors.black}
              multiline={multiline} // Set multiline
              numberOfLines={numberOfLines} // Set the number of lines for multiline
            />
            {endIcon && endIcon}
          </View>
        )}
      />
      {errors && (
        <Text style={[globalStyles.errorMessage, { paddingLeft: 12 }]}>
          {errors?.message ? errors?.message : "This field is required"}
        </Text>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    height: 51,
    columnGap: 5,
  },

  textInputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
  },

  multilineStyle: {
    textAlignVertical: "top", // Ensures text starts from the top when multiline
  },
});
