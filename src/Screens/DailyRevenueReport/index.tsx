import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../utils/globalStyle";
import BackButtonHead from "../../components/backButtonHead";
import { Controller, useForm } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../../styles/colores";
import CalendarIcon from "../../assets/Images/CalendarIcon.svg";
import CustomTable from "./table";
import axiosInstance from "../../utils/axios";
import { URLS } from "../../api";
import { getItem } from "../../utils/asyncStorage";
import dayjs from "dayjs";
const DailyRevenueReport = (props: any) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState<any>(false);
  const [tableData, setTableData] = useState<any>([]);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: dayjs().format('YYYY-M-D'),
    },
  });
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  console.log(getValues("date"), "date");

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = (date: any) => {
    const formattedDate = dayjs(date).format("YYYY-M-D");
    setValue("date", formattedDate);
    hideDatePicker();
  };

  const dailyRevenueReport = async () => {
    const organizationId = await getItem<string>("organizationId");
    try {
      await axiosInstance
        .get(`${URLS.GET_DAILY_REVENUE}`, {
          params: {
            OID: organizationId,
            EntryDate: getValues("date"),
          },
        })
        .then((res: any) => {
          if (res.status == 200) {
            setTableData(res?.data);
          }
        })
        .catch((err: any) => {
          console.log(err, "dailyRevenueReport Api");
        });
    } catch (error) {
      console.log(error, "errors");
    }
  };
  useEffect(() => {
    dailyRevenueReport();
  }, [getValues("date")]);
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead title="Daily Revenue Report" props={props} />

        <Controller
          control={control}
          name="date"
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TouchableOpacity onPress={showDatePicker}>
              <View style={[styles.inputContainerStyle]}>
                <TextInput
                  placeholder="Date"
                  onChangeText={onChange}
                  value={value}
                  readOnly
                  style={styles.textInputStyle}
                  placeholderTextColor={colors.black}
                />
                <CalendarIcon height={24} width={24} />
              </View>
            </TouchableOpacity>
          )}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
        <View>
          <CustomTable tableData={tableData && tableData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyRevenueReport;

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: "#F6FBFF",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E2EEF7",
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    height: 51,
    columnGap: 5,
    marginVertical: 20,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
  },

  container: {
    flex: 1,
    padding: 16,
  },
  head: {
    height: 50,
    backgroundColor: "#f1f1f1",
  },
  text: {
    margin: 6,
    textAlign: "center",
  },
  border: {
    borderWidth: 1,
    borderColor: "#c8e1ff",
  },
});
