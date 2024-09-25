import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextBox } from "../../../components/form/textBox";
import { Controller, useForm } from "react-hook-form";
import { globalStyles } from "../../../utils/globalStyle";
import { colors } from "../../../styles/colores";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropdownComponent from "../../../components/form/dropdown";
import { Button } from "@rneui/base";
import CustomButton from "../../../components/button";
const EntryForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      room: "",
      guest_name: "",
      time: "",
      date: "",
      guest_status: "",
      department_involved: "",
      complaint: "",
      received_by: "",
      informed_by: "",
      company_name: "",
      updated_by: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };

  const [isTimePickerVisible, setTimePickerVisible] = useState<any>(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState<any>(false);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = (date: any) => {
    setValue("time", date?.toLocaleTimeString());
    hideTimePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = (date: any) => {
    setValue("date", date?.toLocaleDateString());
    hideDatePicker();
  };

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
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.room}
            name="room"
            placeholder="Room"
            // keyboardType='number-pad'
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.guest_name}
            name="guest_name"
            placeholder="Guest Name"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="time"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showTimePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Time"
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
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
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
        </View>
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="guest_status"
          placeholder="Select Guest Status"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.guest_status}
          helperText="This field is required"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.department_involved}
          name="department_involved"
          placeholder="Department Involved"
          // keyboardType='number-pad'
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.complaint}
          name="complaint"
          placeholder="Complaint"
          numberOfLines={4}
          multiline={true}
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.received_by}
          name="received_by"
          placeholder="Received By"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.informed_by}
          name="informed_by"
          placeholder="Informed By"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.company_name}
          name="company_name"
          placeholder="Company Name"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.updated_by}
          name="updated_by"
          placeholder="Updated By"
        />
      </View>
      <View>
        <CustomButton
          title="Submit"
          ExStyle={{}}
          type="solid"
          color={colors.primary}
          radius="md"
          fontSize={20}
          onPress={handleSubmit(onSubmit)}
          size="md"
        />
      </View>
    </View>
  );
};

export default EntryForm;

const styles = StyleSheet.create({
  container: {
    rowGap: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 18,
  },

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
  textInputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: colors.black,
  },
});
