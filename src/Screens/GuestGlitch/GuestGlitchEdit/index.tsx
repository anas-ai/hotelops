import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import EditForm from "./editForm";

const GuestGlitchEdit = (props: any) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead title="Guest Glitch GM Edit" props={props} />
        <View style={{ marginTop: 18 }}>
          <EditForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GuestGlitchEdit;

const styles = StyleSheet.create({});
