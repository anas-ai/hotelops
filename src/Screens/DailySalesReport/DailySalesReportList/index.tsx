import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { ScreeName } from "../../../utils/constants";
import Plus from "../../../assets/Images/pluscircle.svg";
import Edit from "../../../assets/Images/editWhite.svg";
import Search from "../../../assets/Images/searchoutline.svg";
import AccountDetailCard from "./accountDetailCard";
import { useForm, Controller } from "react-hook-form";
import { TextBox } from "../../../components/form/textBox";
import { getItem } from "../../../utils/asyncStorage";
import axiosInstance from "../../../utils/axios";
import { URLS } from "../../../api";

const DailySalesReportList = (props: any) => {
  const [accountList, setAccountList] = useState<any>([]);
  const [filteredAccountList, setFilteredAccountList] = useState<any>([]);
  const {
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { search: "" } });

  // Watch for the search input changes
  const searchValue = watch("search");

  // Fetch account list from API
  const getAccountList = async () => {
    const organizationId = await getItem<string>("organizationId");
    try {
      const res = await axiosInstance.get(`${URLS.DSR_ACCOUNT_LIST}`, {
        params: { OID: organizationId },
      });
      if (res.status === 200) {
        setAccountList(res?.data);
        setFilteredAccountList(res?.data); // Set the initial filtered list
      }
    } catch (error) {
      console.log(error, "errors");
    }
  };

  // Effect to fetch account list once component mounts
  useEffect(() => {
    getAccountList();
  }, []);

  // Effect to filter account list whenever the search value changes
  useEffect(() => {
    if (searchValue) {
      const filtered = accountList?.filter(
        (item: any) =>
          item?.CompanyName?.toLowerCase().includes(
            searchValue.toLowerCase()
          ) ||
          item?.AccountNumber?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredAccountList(filtered);
    } else {
      setFilteredAccountList(accountList);
    }
  }, [searchValue, accountList]);

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

        {/* Render filtered account list */}
        {filteredAccountList?.map((item: any, index: number) => {
          const data: any = [
            { label: "Name", value: item?.CompanyName || "N/A" },
            { label: "Mail Id", value: item?.EmailID || "N/A" },
            { label: "Address", value: item?.Address || "N/A" },
          ];
          return (
            <AccountDetailCard
              key={index}
              props={props}
              listData={data}
              title={`Account #${item.AccountNumber}`}
              visitAdd={() =>
                props.navigation.navigate(
                  ScreeName.DAILY_SALES_REPORT_ADD_VISIT,
                  {
                    id: "new",
                  }
                )
              }
              visitList={() =>
                props.navigation.navigate(
                  ScreeName.DAILY_SALES_REPORT_VISIT_LIST
                )
              }
              contactAdd={() =>
                props.navigation.navigate(
                  ScreeName.DAILY_SALES_REPORT_NEW_CONTACT
                )
              }
              contactList={() =>
                props.navigation.navigate(
                  ScreeName.DAILY_SALES_REPORT_CONTACT_LIST
                )
              }
              headerIcon={
                <Edit
                  onPress={() =>
                    props.navigation.navigate(
                      ScreeName.DAILY_SALES_REPORT_ADD_VISIT,
                      { id: "edit" }
                    )
                  }
                />
              }
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailySalesReportList;

const styles = StyleSheet.create({});
