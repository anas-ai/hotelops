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
const AddContactForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mr: "",
      first_name: "",
      last_name: "",
      title: "",
      contact_number: "",
      phone_number: "",
      alternate_number: "",
      email: "",
      alternate_email: "",
      country: "",
      state: "",
      city: "",
      postal_code: "",
      address: "",
      membership_number: "",
      extension_number: "",
      card_type: "",
      number: "",
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
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.title}
          name="title"
          placeholder="Title"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.contact_number}
          name="contact_number"
          placeholder="Contact Number"
          keyboardType="number-pad"
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
            errors={errors.alternate_number}
            name="alternate_number"
            placeholder="Alternate No."
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
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <TextBox
            control={control}
            errors={errors.country}
            name="country"
            placeholder="Country"
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
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.address}
          name="address"
          placeholder="Address"
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
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.extension_number}
          name="extension_number"
          placeholder="Extension Number"
          keyboardType="number-pad"
        />
      </View>

      <View>
        <DropdownComponent
          control={control}
          dropDownData={data}
          name="card_type"
          placeholder="Card type"
          selectLabel="label"
          selectValue="value"
          required={false}
          errors={errors.card_type}
          helperText="This field is required"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.number}
          name="number"
          placeholder="Number"
          keyboardType="number-pad"
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

export default AddContactForm;

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
