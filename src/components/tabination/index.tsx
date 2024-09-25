import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/colores";

const Tabination = ({ selectedTab, setSelectedTab, count }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          selectedTab === "open" && styles.selectedTab,
          selectedTab !== "open" && styles.defaultTabBorder,
        ]}
        onPress={() => setSelectedTab("open")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "open"
              ? styles.selectedTabText
              : styles.defaultTabText,
          ]}
        >
          Open {selectedTab == "open" && `(${count})`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tab,
          selectedTab === "close" && styles.selectedTab,
          selectedTab !== "close" && styles.defaultTabBorder,
        ]}
        onPress={() => setSelectedTab("close")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "close"
              ? styles.selectedTabText
              : styles.defaultTabText,
          ]}
        >
          Close 
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    columnGap: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: colors.primary,
  },
  defaultTabBorder: {
    borderColor: "#E2EEF7",
    borderWidth: 1,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 16,
    fontFamily: "Gilroy-SemiBold",
  },
  selectedTabText: {
    color: "white",
  },
  defaultTabText: {
    color: "black",
  },
});
