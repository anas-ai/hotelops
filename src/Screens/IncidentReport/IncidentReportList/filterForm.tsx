import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DropdownComponent from "../../../components/form/dropdown";
import { Controller, useForm } from "react-hook-form";
import { TextBox } from "../../../components/form/textBox";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../../../styles/colores";
import { globalStyles } from "../../../utils/globalStyle";
import { Button } from "@rneui/base";

const data: any = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const FilterForm = ({ handleCloseActionSheet }: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hotel: "",
      option: "",
      report_date_from: "",
      report_date_to: "",
      incident_date_from: "",
      incident_date_to: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };

  const [isReportDateFromPickerVisible, setReportDateFromPickerVisible] =
    useState<any>(false);
  const [isReportDateToPickerVisible, setReportDateToPickerVisible] =
    useState<any>(false);
  const [isIncidentDateFromPickerVisible, setIncidentDateFromPickerVisible] =
    useState<any>(false);
  const [isIncidentDateToPickerVisible, setIncidentDateToPickerVisible] =
    useState<any>(false);

  const showReportDateFromPicker = () => {
    setReportDateFromPickerVisible(true);
  };

  const showReportDateToPicker = () => {
    setReportDateToPickerVisible(true);
  };
  const showIncidentDatefromPicker = () => {
    setIncidentDateFromPickerVisible(true);
  };
  const showIncidentDateToPicker = () => {
    setIncidentDateToPickerVisible(true);
  };
  const hideReportDateFromPicker = () => {
    setReportDateFromPickerVisible(false);
  };

  const hideReportDateToPicker = () => {
    setReportDateToPickerVisible(false);
  };
  const hideIncidentDateFromPicker = () => {
    setIncidentDateFromPickerVisible(false);
  };
  const hideIncidentDateToPicker = () => {
    setIncidentDateToPickerVisible(false);
  };

  const handleConfirmReportDateFrom = (date: any) => {
    setValue("report_date_from", date?.toLocaleDateString());
    hideReportDateFromPicker();
  };

  const handleConfirmReportDateTo = (date: any) => {
    setValue("report_date_to", date?.toLocaleDateString());
    hideReportDateToPicker();
  };

  const handleConfirmIncidentDateTo = (date: any) => {
    setValue("incident_date_to", date?.toLocaleDateString());
    hideIncidentDateToPicker();
  };

  const handleConfirmIncidentDateFrom = (date: any) => {
    setValue("incident_date_from", date?.toLocaleDateString());
    hideIncidentDateFromPicker();
  };


  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingVertical: 4 }}>
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 20,
            color: colors.black,
          }}
        >
          Select Filters
        </Text>
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="hotel"
          placeholder="Select Hotel"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.hotel}
          helperText="This field is required"
        />
      </View>

      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="option"
          placeholder="Select an option"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.option}
          helperText="This field is required"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="report_date_from"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showReportDateFromPicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Report date from"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    readOnly
                    style={styles.textInputStyle}
                    placeholderTextColor={colors.black}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
          <DateTimePickerModal
            isVisible={isReportDateFromPickerVisible}
            mode="date"
            onConfirm={handleConfirmReportDateFrom}
            onCancel={hideReportDateFromPicker}
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="report_date_to"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showReportDateToPicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Report date to"
                    onChangeText={onChange}
                    value={value}
                    readOnly
                    style={styles.textInputStyle}
                    placeholderTextColor={colors.black}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
          <DateTimePickerModal
            isVisible={isReportDateToPickerVisible}
            mode="date"
            onConfirm={handleConfirmReportDateTo}
            onCancel={hideReportDateToPicker}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="incident_date_from"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showIncidentDatefromPicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Incident date from"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    readOnly
                    style={styles.textInputStyle}
                    placeholderTextColor={colors.black}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
          <DateTimePickerModal
            isVisible={isIncidentDateFromPickerVisible}
            mode="date"
            onConfirm={handleConfirmIncidentDateFrom}
            onCancel={hideIncidentDateFromPicker}
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="incident_date_to"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showIncidentDateToPicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Incident date to"
                    onChangeText={onChange}
                    value={value}
                    readOnly
                    style={styles.textInputStyle}
                    placeholderTextColor={colors.black}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
          <DateTimePickerModal
            isVisible={isIncidentDateToPickerVisible}
            mode="date"
            onConfirm={handleConfirmIncidentDateTo}
            onCancel={hideIncidentDateToPicker}
          />
        </View>
      </View>
      <View style={[styles.row, { marginTop: 5 }]}>
        <View style={{ flex: 1 }}>
          <Button
            title="Clear"
            type="outline"
            onPress={handleCloseActionSheet}
            buttonStyle={styles.clearButtonStyle}
            titleStyle={styles.clearButtonText}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Button
            title="Apply"
            onPress={handleSubmit(onSubmit)}
            buttonStyle={styles.applyButtonStyle}
            titleStyle={styles.applyButtonText}
          />
        </View>
      </View>
    </View>
  );
};

export default FilterForm;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 20, rowGap: 16 },
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 18,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  clearButtonStyle: {
    borderColor: "#E2EEF7",
    borderWidth: 1,
    borderRadius: 9,
    height: 50,
  },
  clearButtonText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Gilroy-SemiBold",
  },
  applyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Gilroy-SemiBold",
  },
  applyButtonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 9,
    height: 50,
  },
});
