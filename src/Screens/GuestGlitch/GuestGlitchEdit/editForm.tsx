import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextBox } from "../../../components/form/textBox";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { globalStyles } from "../../../utils/globalStyle";
import { colors } from "../../../styles/colores";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropdownComponent from "../../../components/form/dropdown";
import CustomButton from "../../../components/button";
import Calendar from "../../../assets/Images/calendar.svg";
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
const EditForm = () => {
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
      process_lapse: "",
      process_lapse_category: "",
      status: "",
      resolved_by: "",
      services_recovery: "",
      detailed_investigation: "",
      internal_action: "",
      internal_action_category: "",
      recieved_by: "",
      informed_by: "",
      company_name: "",
      updated_by: "",
      rate: "",
      check_in_date: "",
      check_out_date: "",
      guest_met: [
        {
          guest_met_by: "",
          guest_met_during: "",
          designation: "",
          guest_met_on: "",
        },
      ],
      room_amt: "",
      food_amt: "",
      other: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "guest_met", // Name of the field array in the form
  });
  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  const [isTimePickerVisible, setTimePickerVisible] = useState<boolean>(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [isCheckInDateVisible, setCheckInDateVisible] =
    useState<boolean>(false);
  const [isCheckOutDateVisible, setCheckOutDateVisible] =
    useState<boolean>(false);
  const [isGuestMetOnVisible, setGuestMetOnVisible] = useState<any>(null);
  const [currentGuestIndex, setCurrentGuestIndex] = useState<number | null>(
    null
  );
  const showTimePicker = () => {
    setTimePickerVisible(true);
  };
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const showCheckInDatePicker = () => {
    setCheckInDateVisible(true);
  };
  const showCheckOutDatePicker = () => {
    setCheckOutDateVisible(true);
  };
  const showGuestDatePicker = (index: number) => {
    setCurrentGuestIndex(index);
    setGuestMetOnVisible(index);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const hideCheckInPicker = () => {
    setCheckInDateVisible(false);
  };

  const hideCheckOutPicker = () => {
    setCheckOutDateVisible(false);
  };
  const hideGuestDate = () => {
    setCurrentGuestIndex(null);
    setGuestMetOnVisible(null);
  };

  const handleConfirmTime = (date: any) => {
    setValue("time", date?.toLocaleTimeString());
    hideTimePicker();
  };

  const handleConfirmDate = (date: any) => {
    setValue("date", date?.toLocaleDateString());
    hideDatePicker();
  };
  const handleConfirmCheckInDate = (date: any) => {
    setValue("check_in_date", date?.toLocaleDateString());
    hideCheckInPicker();
  };
  const handleConfirmCheckOutDate = (date: any) => {
    setValue("check_out_date", date?.toLocaleDateString());
    hideCheckOutPicker();
  };
  const handleConfirmGuestDate = (date: Date) => {
    if (currentGuestIndex !== null) {
      const formattedDate = date?.toLocaleDateString();
      setValue(`guest_met.${currentGuestIndex}.guest_met_on`, formattedDate);
      hideGuestDate();
    }
  };

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
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.complaint}
          name="complaint"
          placeholder="Complaint"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.process_lapse}
          name="process_lapse"
          placeholder="Process Lapse"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.process_lapse_category}
          name="process_lapse_category"
          placeholder="Process Lapse Category"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.status}
          name="status"
          placeholder="Status"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.resolved_by}
          name="resolved_by"
          placeholder="Resolved By"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.services_recovery}
          name="services_recovery"
          placeholder="Services Recovery"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.detailed_investigation}
          name="detailed_investigation"
          placeholder="Detailed Investigation"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.internal_action}
          name="internal_action"
          placeholder="Internal Action Taken"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.internal_action_category}
          name="internal_action_category"
          placeholder="Internal Action Taken Category"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.recieved_by}
          name="recieved_by"
          placeholder="Recieved By"
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
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.rate}
          name="rate"
          placeholder="Rate"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="check_in_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showCheckInDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Check in Date"
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
            isVisible={isCheckInDateVisible}
            mode="date"
            onConfirm={handleConfirmCheckInDate}
            onCancel={hideCheckInPicker}
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="check_out_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showCheckOutDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Check Out Date"
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
            isVisible={isCheckOutDateVisible}
            mode="date"
            onConfirm={handleConfirmCheckOutDate}
            onCancel={hideCheckOutPicker}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Gilroy-SemiBold",
          color: colors.black,
        }}
      >
        Guest Met
      </Text>
      {fields?.map((field: any, index: any) => {
        return (
          <View key={field.id} style={styles.container}>
            {index > 0 && (
              <CustomButton
                title="Remove"
                type="solid"
                size="md"
                color={colors.red}
                radius="md"
                ExStyle={{ alignItems: "flex-end" }}
                fontSize={14}
                onPress={() => remove(index)}
              />
            )}
            <View style={styles.row}>
              <View style={[globalStyles.fullWidth, { flex: 1 }]}>
                <DropdownComponent
                  control={control}
                  dropDownData={data}
                  name={`guest_met[${index}].guest_met_by`}
                  placeholder="Guest Met by"
                  selectLabel="label"
                  selectValue="value"
                  required={false}
                  errors={errors.guest_met?.[index]?.guest_met_by}
                  helperText="This field is required"
                />
              </View>
              <View style={[globalStyles.fullWidth, { flex: 1 }]}>
                <DropdownComponent
                  control={control}
                  dropDownData={data}
                  name={`guest_met[${index}].guest_met_during`}
                  placeholder="Guest Met During"
                  selectLabel="label"
                  selectValue="value"
                  required={false}
                  errors={errors.guest_met?.[index]?.guest_met_during}
                  helperText="This field is required"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={[globalStyles.fullWidth, { flex: 1 }]}>
                <DropdownComponent
                  control={control}
                  dropDownData={data}
                  name={`guest_met[${index}].designation`}
                  placeholder="Designation"
                  selectLabel="label"
                  selectValue="value"
                  required={false}
                  errors={errors.guest_met?.[index]?.designation}
                  helperText="This field is required"
                />
              </View>
              <View style={[globalStyles.fullWidth, { flex: 1 }]}>
                <Controller
                  control={control}
                  name={`guest_met.${index}.guest_met_on` as const}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity
                      onPress={() => showGuestDatePicker(index)}
                    >
                      <View
                        style={[
                          styles.inputContainerStyle,
                          { flexDirection: "row", alignItems: "center" },
                        ]}
                      >
                        <TextInput
                          placeholder="Guest Met On"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          readOnly
                          style={styles.textInputStyle}
                          placeholderTextColor={colors.black}
                        />
                        <Calendar />
                      </View>
                    </TouchableOpacity>
                  )}
                />
                <DateTimePickerModal
                  isVisible={isGuestMetOnVisible == index ? true : false}
                  mode="date"
                  onConfirm={(date) => handleConfirmGuestDate(date)}
                  onCancel={hideGuestDate}
                />
              </View>
            </View>
          </View>
        );
      })}
      <View>
        <CustomButton
          title="Add More"
          type="solid"
          size="md"
          color={colors.primary}
          radius="md"
          ExStyle={{ width: 100 }}
          fontSize={14}
          onPress={() =>
            append({
              guest_met_by: "",
              guest_met_during: "",
              designation: "",
              guest_met_on: "",
            })
          }
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Gilroy-SemiBold",
          color: colors.black,
        }}
      >
        Service Recovery Amount
      </Text>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.room_amt}
            name="room_amt"
            placeholder="Room"
            keyboardType="number-pad"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.food_amt}
            name="food_amt"
            placeholder="Food"
            keyboardType="number-pad"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.other}
            name="other"
            placeholder="Other"
            keyboardType="number-pad"
          />
        </View>
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

export default EditForm;

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
