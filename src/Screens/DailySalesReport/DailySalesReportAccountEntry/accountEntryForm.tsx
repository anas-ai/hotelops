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
import CustomCheckbox from "../../../components/form/checkbox";
const data: any = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
];
const AccountEntryForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company_name: "",
      phone_number: "",
      landline_number: "",
      city: "",
      postal_code: "",
      email: "",
      alternate_email: "",
      address: "",
      alternate_city: "",
      state: "",
      alternate_address: "",
      website: "",
      membership_number: "",
      company_level: "",
      industry: "",
      company_classification: "",
      key_account: "",
      account_manager: "",
      mr: "",
      first_name: "",
      last_name: "",
      profile: "",
      designation: "",
      contact_number: "",
      contact_email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <View style={styles.container}>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="comapny_name"
          placeholder="Company Name"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.company_name}
          helperText="This field is required"
        />
      </View>

      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.phone_number}
            name="phone_number"
            placeholder="Phone No."
            keyboardType="number-pad"
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.landline_number}
            name="landline_number"
            placeholder="Landline No."
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.city}
            name="city"
            placeholder="City"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.postal_code}
            name="postal_code"
            placeholder="Postal Code"
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.email}
            name="email"
            placeholder="Email"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.alternate_email}
            name="alternate_email"
            placeholder="Alternate Email"
          />
        </View>
      </View>

      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.address}
          name="address"
          placeholder="Address"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Gilroy-Medium",
            color: colors.black,
          }}
        >
          Head Office Location
        </Text>
        <CustomCheckbox
          flex={0}
          title="Same as Local Office Details"
          titleSize={12}
          checkSize={14}
          titleFamily="Gilroy-Medium"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.alternate_city}
            name="alternate_city"
            placeholder="City"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.state}
            name="state"
            placeholder="State"
          />
        </View>
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.alternate_address}
          name="alternate_address"
          placeholder="Address"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.website}
          name="website"
          placeholder="Website"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.membership_number}
          name="membership_number"
          placeholder="Membership Number"
          keyboardType="number-pad"
        />
      </View>

      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="company_level"
          placeholder="Company Level"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.company_level}
          helperText="This field is required"
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="industry"
          placeholder="Industry"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.industry}
          helperText="This field is required"
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="company_classification"
          placeholder="Company Classification"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.company_classification}
          helperText="This field is required"
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="key_account"
          placeholder="Key Account"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.key_account}
          helperText="This field is required"
        />
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="account_manager"
          placeholder="Account Manager"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.account_manager}
          helperText="This field is required"
        />
      </View>
      <Text style={styles.subheadingText}>Contact Person Details</Text>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="mr"
          placeholder="Mr./Mrs./Ms"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.mr}
          helperText="This field is required"
        />
      </View>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.first_name}
            name="first_name"
            placeholder="First Name"
          />
        </View>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.last_name}
            name="last_name"
            placeholder="Last Name"
          />
        </View>
      </View>
      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="profile"
          placeholder="Profile"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.profile}
          helperText="This field is required"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.designation}
          name="designation"
          placeholder="Designation"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.contact_number}
          name="contact_number"
          placeholder="Contact No."
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.contact_email}
          name="contact_email"
          placeholder="Email"
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

export default AccountEntryForm;

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
    fontFamily: "Gilroy-SemiBold",
    fontSize: 20,
    color: colors.black,
  },
});
