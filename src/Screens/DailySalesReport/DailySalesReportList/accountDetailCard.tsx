import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../styles/colores";
import CustomButton from "../../../components/button";
import { globalStyles } from "../../../utils/globalStyle";

const AccountDetailCard = ({
  props,
  listData,
  title,
  onPress,
  paragraph,
  headerIcon,
  visitAdd,
  visitList,
  contactAdd,
  contactList,
}: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.4 : 1}>
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <View style={styles.headerIconContainer}>{headerIcon}</View>
        </View>
        <View style={styles.contentBox}>
          {listData &&
            listData?.map((item: any, index: any) => (
              <View style={styles.content} key={index}>
                <Text style={styles.labelText}>{item.label}</Text>
                <Text style={styles.separatorText}>:</Text>
                <Text style={styles.valueText}>{item.value}</Text>
              </View>
            ))}
          {paragraph && (
            <View style={styles.content}>
              <Text style={styles.valueText}>{paragraph}</Text>
            </View>
          )}
          {visitAdd && (
            <View
              style={{
                borderTopColor: "#7E869E40",
                borderTopWidth: 1,
                rowGap: 12,
                paddingTop: 14,
              }}
            >
              <View style={styles.row}>
                <Text style={styles.labelText}>Visit :</Text>
                <View style={styles.btnVisit}>
                  <CustomButton
                    title="Add"
                    color={colors.primary}
                    onPress={visitAdd}
                    ExStyle={{ width: "100%", flex: 1 }}
                  />
                  <CustomButton
                    title="View"
                    onPress={visitList}
                    color={colors.primary}
                    ExStyle={{ width: "100%", flex: 1 }}
                  />
                </View>
              </View>
              <View style={styles.row}>
                <Text style={styles.labelText}>Contact :</Text>
                <View style={styles.btnVisit}>
                  <CustomButton
                    title="Add"
                    onPress={contactAdd}
                    color={colors.primary}
                    ExStyle={{ width: "100%", flex: 1 }}
                  />
                  <CustomButton
                    title="View"
                    onPress={contactList}
                    color={colors.primary}
                    ExStyle={{ width: "100%", flex: 1 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountDetailCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
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
    rowGap: 12,
  },
  labelText: {
    color: "#7E869E",
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    flex: 1,
  },
  btnVisit: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    columnGap: 20,
  },
  separatorText: {
    color: "#7E869E",
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    marginHorizontal: 16,
  },
  valueText: {
    color: colors.darkBlack,
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    flex: 2,
  },
});
