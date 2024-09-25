import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import AccountEntryForm from "./accountEntryForm";
const DailySalesReportAccountEntry = (props: any) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <View style={{ marginBottom: 18 }}>
          <BackButtonHead title="Account Entry" props={props} />
        </View>
        <AccountEntryForm/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportAccountEntry;

const styles = StyleSheet.create({});
