import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import EntryForm from "./entryForm";

const IncidentReportEntry = (props: any) => {
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
        <BackButtonHead
          title={id == "new" ? "Incident Report" : "Incident Report Edit"}
          props={props}
        />
        <View style={{ marginTop: 18 }}>
          <EntryForm id={id}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IncidentReportEntry;

const styles = StyleSheet.create({});
