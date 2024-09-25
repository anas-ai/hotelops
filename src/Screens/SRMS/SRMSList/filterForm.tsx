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
      location: "",
      request_number: "",
      assigned: "",
      start_date: "",
      end_date: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };

  const [isStartDatePickerVisible, setStartDatePickerVisible] =
    useState<any>(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] =
    useState<any>(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisible(false);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisible(false);
  };

  const handleConfirmIncidentDateTo = (date: any) => {
    setValue("end_date", date?.toLocaleDateString());
    hideEndDatePicker();
  };

  const handleConfirmIncidentDateFrom = (date: any) => {
    setValue("start_date", date?.toLocaleDateString());
    hideStartDatePicker();
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
        <TextBox
          control={control}
          errors={errors.location}
          name="location"
          placeholder="Location"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.request_number}
            name="request_number"
            keyboardType="Number-pad"
            placeholder="Request No."
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <DropdownComponent
            control={control}
            dropDownData={data}
            name="assigned"
            placeholder="Assigned"
            selectLabel="label"
            selectValue="value"
            required={false}
            errors={errors.assigned}
            helperText="This field is required"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="start_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showStartDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Start Date"
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
            isVisible={isStartDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmIncidentDateFrom}
            onCancel={hideStartDatePicker}
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="end_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showEndDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="End Date"
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
            isVisible={isEndDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmIncidentDateTo}
            onCancel={hideEndDatePicker}
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
