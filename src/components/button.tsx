import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { colors } from "../styles/colores";

const CustomButton = ({
  title,
  ExStyle,
  type = "solid",
  color,
  loading,
  fontSize = 16,
  radius = "md",
  size = "md",
  fontFamily = "Gilroy-SemiBold",
  onPress,
  fontColor = colors.white,
  titleStyle,
}: any) => {
  return (
    <Button
      title={title}
      color={color}
      loading={loading}
      radius={radius}
      type={type}
      size={size}
      containerStyle={{ ...ExStyle }}
      titleStyle={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: fontColor,
        ...titleStyle,
      }}
      onPress={onPress}
    />
  );
};

export default CustomButton;
