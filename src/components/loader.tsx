import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colores";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
