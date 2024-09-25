import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import Edit from "../../../assets/Images/editWhite.svg";
import Search from "../../../assets/Images/searchoutline.svg";
import AccountDetailCard from "./accountDetailCard";
import { useForm } from "react-hook-form";
import { TextBox } from "../../../components/form/textBox";
const data: any = [
  { label: "Date & Time", value: "March 6, 2023 04:10 pm" },
  { label: "Guest Name", value: "Vishal Menaria" },
  { label: "Room", value: "101" },
];
const DailySalesReportList = (props: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { search: "" } });
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
          title="Account List"
          props={props}
          rightIcon={<Plus />}
          onPressRight={() =>
            props.navigation.navigate(
              ScreeName.DAILY_SALES_REPORT_ACCOUNT_ENTRY
            )
          }
        />
        <View style={{ marginVertical: 14, marginTop: 18 }}>
          <TextBox
            control={control}
            name="search"
            placeholder="Search Company here"
            endIcon={<Search width={20} height={20} />}
          />
        </View>
        <AccountDetailCard
          props={props}
          listData={data}
          title="Account# 196"
          visitAdd={() =>
            props.navigation.navigate(ScreeName.DAILY_SALES_REPORT_ADD_VISIT, {
              id: "new",
            })
          }
          visitList={() =>
            props.navigation.navigate(ScreeName.DAILY_SALES_REPORT_VISIT_LIST)
          }
          contactAdd={() =>
            props.navigation.navigate(ScreeName.DAILY_SALES_REPORT_NEW_CONTACT)
          }
          contactList={() =>
            props.navigation.navigate(ScreeName.DAILY_SALES_REPORT_CONTACT_LIST)
          }
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

export default DailySalesReportList;

const styles = StyleSheet.create({});
