import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../styles/colores";

import { globalStyles } from "../../utils/globalStyle";
const DetailCard = ({
  props,
  listData,
  title,
  onPress,
  paragraph,
  headerIcon,
}: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.4 : 1}>
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title || 'N/A'}</Text>
          <View style={styles.headerIconContainer}>{headerIcon}</View>
        </View>
        <View style={styles.contentBox}>
          {listData &&
            listData?.map((item: any, index: any) => (
              <View style={styles.content} key={index}>
                <Text style={styles.labelText}>{item.label}</Text>
                <Text style={styles.separatorText}>:</Text>
                <Text style={styles.valueText}>{item.value || "N/A"}</Text>
              </View>
            ))}
          {paragraph && (
            <View style={styles.content}>
              <Text style={styles.valueText}>{paragraph ||'N/A'}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  header: {
    backgroundColor: "#D6E8F1",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  headerText: {
    color: colors.darkBlack,
    fontSize: 18,
    fontFamily: "Gilroy-SemiBold",
  },
  content: {
    flexDirection: "row", // Align children horizontally
    alignItems: "flex-start", // Center vertically
  },
  contentBox: {
    backgroundColor: "#F0F8FE",
    paddingVertical: 16,
    paddingHorizontal: 16,
    rowGap: 10,
  },
  labelText: {
    color: "#7E869E",
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    flex: 1, // Allow this text to take up available space on the left
  },
  separatorText: {
    color: "#7E869E",
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    marginHorizontal: 16, // Add some space around the separator
  },
  valueText: {
    color: colors.darkBlack,
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    flex: 1, // Allow this text to take up available space on the right
  },
});
