import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";
import DetailBox from "./DetailBox";
import BackButtonHead from "../../components/backButtonHead";
import CalendarScreen from "./Calendar";

const ProfileScreen = (props: any) => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead title="Profile" props={props} />
        <DetailBox props={props} />
        <CalendarScreen props={props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
