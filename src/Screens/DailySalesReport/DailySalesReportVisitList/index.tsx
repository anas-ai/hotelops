import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import AccountDetailCard from "../DailySalesReportList/accountDetailCard";
import Edit from "../../../assets/Images/editWhite.svg";
const data: any = [
  { label: "Date & Time", value: "March 6, 2023 04:10 pm" },
  { label: "Guest Name", value: "Vishal Menaria" },
  { label: "Room", value: "101" },
];
const DailySalesReportVisitList = (props: any) => {
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
          title="Visit List"
          props={props}
          rightIcon={<Plus />}
          onPressRight={() =>
            props.navigation.navigate(
              ScreeName.DAILY_SALES_REPORT_ACCOUNT_ENTRY
            )
          }
        />
        <AccountDetailCard
          props={props}
          listData={data}
          title="Account# 196"
          headerIcon={
            <>
              <Edit
                onPress={() =>
                  props.navigation.navigate(
                    ScreeName.DAILY_SALES_REPORT_ADD_VISIT,
                    { id: "edit" }
                  )
                }
              />
            </>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportVisitList;

const styles = StyleSheet.create({});
