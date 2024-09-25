import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../assets/Images/backBtn.svg";
import { colors } from "../styles/colores";

const BackButtonHead = ({ title, props, rightIcon ,onPressRight}: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginVertical: 10,
      }}
    >
      <BackButton
        width={40}
        height={40}
        style={{ position: "absolute", left: 0 }}
        onPress={() => props.navigation.goBack()}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Gilroy-SemiBold",
            color: colors.black,
          }}
        >
          {title}
        </Text>
      </View>
      {rightIcon && (
        <TouchableOpacity
          style={{ position: "absolute", right: 0 }}
          onPress={onPressRight}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackButtonHead;
