import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/colores";

const CustomTable = ({ tableData }: any) => {
  const convertToIndianFormat = (number: any) => {
    return new Intl.NumberFormat("en-IN", {}).format(number);
  };
  return (
    <>
      {tableData?.Table?.map((elem: any, index: any) => {
        return (
          <View style={styles.table} key={index}>
            {/* Table Header */}
            <Text style={styles.tableHeader}>{elem?.Category}</Text>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}></Text>
              <Text style={styles.tableHeader}>FTD</Text>
              <Text style={styles.tableHeader}>MTD</Text>
              <Text style={styles.tableHeader}>YTD</Text>
            </View>

            {/* Table Rows */}
            {tableData?.Table1?.filter(
              (subElem: any) => subElem?.Category === elem?.Category
            ).map((subElem: any, subIndex: any) => {
              return (
                <View
                  style={
                    subElem?.IsTotal
                      ? [styles.tableRow, styles.highlightedCell]
                      : styles.tableRow
                  }
                  key={subIndex}
                >
                  <Text style={styles.tableCell}>{subElem?.item}</Text>
                  <Text style={styles.tableCell}>
                    {subElem?.FTD_Actual
                      ? convertToIndianFormat(subElem?.FTD_Actual)
                      : ""}
                  </Text>
                  {/* <Text style={styles.tableCell}>
                    {subElem?.FTD_Variance
                      ? convertToIndianFormat(subElem?.FTD_Variance)
                      : ""}
                  </Text> */}
                  <Text style={styles.tableCell}>{subElem?.MTD_Actual}</Text>
                  {/* <Text style={styles.tableCell}>
                    {subElem?.MTD_Variance
                      ? convertToIndianFormat(subElem?.MTD_Variance)
                      : ""}
                  </Text> */}
                  <Text style={styles.tableCell}>
                    {subElem?.YTD_Budget
                      ? convertToIndianFormat(subElem?.YTD_Budget)
                      : ""}
                  </Text>
                </View>
              );
            })}
            {/* <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rooms Available</Text>
              <Text style={[styles.tableCell]}>12</Text>
              <Text style={styles.tableCell}>35</Text>
              <Text style={[styles.tableCell]}>150</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rooms Available</Text>
              <Text style={[styles.tableCell]}>12</Text>
              <Text style={styles.tableCell}>35</Text>
              <Text style={[styles.tableCell]}>150</Text>
            </View>
            <View style={[styles.tableRow, styles.highlightedCell]}>
              <Text style={styles.tableCell}>Out of Service</Text>
              <Text style={styles.tableCell}>10</Text>
              <Text style={styles.tableCell}>45</Text>
              <Text style={styles.tableCell}>180</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rooms Available</Text>
              <Text style={[styles.tableCell]}>12</Text>
              <Text style={styles.tableCell}>35</Text>
              <Text style={[styles.tableCell]}>150</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rooms Available</Text>
              <Text style={[styles.tableCell]}>12</Text>
              <Text style={styles.tableCell}>35</Text>
              <Text style={[styles.tableCell]}>150</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Rooms Available</Text>
              <Text style={[styles.tableCell]}>12</Text>
              <Text style={styles.tableCell}>35</Text>
              <Text style={[styles.tableCell]}>150</Text>
            </View>

            <View style={[styles.tableRow, styles.highlightedCell]}>
              <Text style={styles.tableCell}>Out of Service</Text>
              <Text style={styles.tableCell}>10</Text>
              <Text style={styles.tableCell}>45</Text>
              <Text style={styles.tableCell}>180</Text>
            </View> */}

            {/* Add more rows as needed */}
          </View>
        );
      })}
    </>
  );
};

export default CustomTable;

const styles = StyleSheet.create({
  table: {
    borderWidth: 0.4,
    borderColor: "#E9E9E9",
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#303030",
    fontFamily: "Gilroy-SemiBold",
    backgroundColor: "#D6E8F1",
    textAlign: "center",
    borderWidth: 0.4,
    borderColor: "#E9E9E9",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderWidth: 0.4,
    borderColor: "#E9E9E9",
    fontSize: 14,
    color: "#263238",
    fontFamily: "Gilroy-Medium",
  },
  highlightedCell: {
    backgroundColor: "#F0F8FE", // Apply the background color to specific cells
  },
});
