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
];
const AddVisitForm = (id:any) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      call_type: "",
      visit_date: "",
      follow_up_date: "",
      banqueting: "",
      potential: "",
      fit: "",
      mic: "",
      long_stay: "",
      for_the_day: "",
      for_future: "",
      remarks: "",
      contact: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  const [isVisitDatePickerVisible, setVisitDatePickerVisible] =
    useState<boolean>(false);
  const [isFollowDatePickerVisible, setFollowDatePickerVisible] =
    useState<boolean>(false);

  const showVisitDatePicker = () => {
    setVisitDatePickerVisible(true);
  };
  const showFollowDatePicker = () => {
    setFollowDatePickerVisible(true);
  };

  const hideVisitDatePicker = () => {
    setVisitDatePickerVisible(false);
  };

  const hideFollowDatePicker = () => {
    setFollowDatePickerVisible(false);
  };

  const handleConfirmVisit = (date: any) => {
    setValue("visit_date", date?.toLocaleDateString());
    hideVisitDatePicker();
  };

  const handleConfirmDate = (date: any) => {
    setValue("follow_up_date", date?.toLocaleDateString());
    hideFollowDatePicker();
  };

  return (
    <View style={styles.container}>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="call_type"
          placeholder="Call type"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.call_type}
          helperText="This field is required"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="visit_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showVisitDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Visit Date"
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
            isVisible={isVisitDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmVisit}
            onCancel={hideVisitDatePicker}
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="follow_up_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showFollowDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Follow-Up Date"
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
            isVisible={isFollowDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideFollowDatePicker}
          />
        </View>
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="banqueting"
          placeholder="Banqueting Retirement"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.banqueting}
          helperText="This field is required"
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="potential"
          placeholder="Potential"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.potential}
          helperText="This field is required"
        />
      </View>
      <Text style={styles.subheadingText}>
        Potential (Potential call_type Nights):
      </Text>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.fit}
          name="fit"
          placeholder="FIT"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.mic}
          name="mic"
          placeholder="MIC"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.long_stay}
          name="long_stay"
          placeholder="LONG STAY"
        />
      </View>
      <Text style={styles.subheadingText}>Confirmed Booking :</Text>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.for_the_day}
          name="for_the_day"
          placeholder="For the Day"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.for_future}
          name="for_future"
          placeholder="For Future"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.remarks}
          name="remarks"
          placeholder="Remarks"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="contact"
          placeholder="Contact"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.contact}
          helperText="This field is required"
        />
      </View>
      <View>
        <CustomButton
          title={id=='new'?"Submit":"Update"}
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

export default AddVisitForm;

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
  subheadingText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    color: colors.black,
  },
});
