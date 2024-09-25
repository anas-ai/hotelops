import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import AddVisitForm from "./addvisitForm";
const DailySalesReportAddVisit = (props: any) => {
  const { id } = props?.route?.params;
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <BackButtonHead title={id =='new'?"Add Visit":"Visit Edit"} props={props} />
        </View>
        <AddVisitForm id={id}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportAddVisit;

const styles = StyleSheet.create({});
