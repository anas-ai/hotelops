import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import EntryForm from "./entryForm";

const GuestGlitchEntry = (props: any) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead title="Guest Glitch Entry" props={props} />
        <View style={{ marginTop: 18 }}>
          <EntryForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GuestGlitchEntry;

const styles = StyleSheet.create({});
