import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import AddContactForm from "./addContactForm";
const DailySalesReportNewContact = (props: any) => {
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
          <BackButtonHead title="New Contact" props={props} />
        </View>
        <AddContactForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportNewContact;

const styles = StyleSheet.create({});
