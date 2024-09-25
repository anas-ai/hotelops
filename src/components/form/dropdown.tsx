import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "../../styles/colores";
import { Controller } from "react-hook-form";
import { globalStyles } from "../../utils/globalStyle";

const DropdownComponent = ({
  dropDownData,
  control,
  name,
  placeholder,
  selectLabel,
  selectValue,
  required = false,
  errors,
  helperText,
  borderColor = "#E2EEF7",
  bgColor = "#F6FBFF",
}: any) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
            style={[
              {
                height: 51,
                borderColor:borderColor,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: bgColor,
                paddingHorizontal: 8,
              },
              isFocus && !errors && { borderColor: borderColor },
              errors && { borderColor: colors.red }, // Apply red border if there's an error
            ]}
            itemTextStyle ={styles.itemTextStyle}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={[styles.iconStyle, { tintColor: colors.primary }]} // Set the arrow icon color to blue
            data={dropDownData}
            search={false} // Hide the search box
            maxHeight={300}
            labelField={selectLabel}
            valueField={selectValue}
            placeholder={!isFocus ? placeholder : "..."}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item): any => {
              onChange(item?.value);
              setIsFocus(false);
            }}
          />
        )}
      />
      {errors && <Text style={[globalStyles.errorMessage]}>{helperText}</Text>}
    </>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
  },
  itemTextStyle:{
    fontSize:16,
    fontFamily: "Gilroy-Regular",
    color:colors.black
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
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
