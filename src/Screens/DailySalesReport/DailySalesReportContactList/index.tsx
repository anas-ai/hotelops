import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import AccountDetailCard from "../DailySalesReportList/accountDetailCard";

const data: any = [
  { label: "Date & Time", value: "March 6, 2023 04:10 pm" },
  { label: "Guest Name", value: "Vishal Menaria" },
  { label: "Room", value: "101" },
];
const DailySalesReportContactList = (props: any) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead
          title="Contact List"
          props={props}
          rightIcon={<Plus />}
          onPressRight={() =>
            props.navigation.navigate(
              ScreeName.DAILY_SALES_REPORT_NEW_CONTACT
            )
          }
        />
        <AccountDetailCard props={props} listData={data} title="Account# 196" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportContactList;

const styles = StyleSheet.create({});
