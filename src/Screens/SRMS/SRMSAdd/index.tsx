import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import { Button, CheckBox } from "@rneui/base";

import CustomCheckbox from "../../../components/form/checkbox";
import { useFieldArray, useForm } from "react-hook-form";
import { colors } from "../../../styles/colores";
import DropdownComponent from "../../../components/form/dropdown";
import Remove from "../../../assets/Images/removeNegative.svg";
import { TouchableHighlight } from "react-native-gesture-handler";
import CustomButton from "../../../components/button";
const data: any = [
  { label: "Item 1", value: 1 },
  { label: "Item 2", value: 2 },
  { label: "Item 3", value: 3 },
  { label: "Item 4", value: 4 },
  { label: "Item 5", value: 5 },
  { label: "Item 6", value: 6 },
  { label: "Item 7", value: 7 },
  { label: "Item 8", value: 8 },
];
const SrmsAdd = (props: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      guest_check: "",
      location: "",
      description: "",
      selected_request: [
        {
          selected_req: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "selected_request", // Name of the field array in the form
  });
  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <BackButtonHead title="New Request" props={props} />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={{ width: "32%" }}>
            <CustomCheckbox title="Guest" titleSize={16} />
          </View>
          <View style={{ width: "34%" }}>
            <CustomCheckbox title="Employee" titleSize={16} />
          </View>
          <View style={{ width: "33%" }}>
            <CustomCheckbox title="Urgent" titleSize={16} />
          </View>
        </View>
        <View style={{ marginVertical: 14 }}>
          <DropdownComponent
            control={control}
            dropDownData={data}
            name="location"
            placeholder="Select Location"
            selectLabel="label"
            selectValue="value"
            required={false}
            errors={errors.location}
            helperText="This field is required"
          />
        </View>

        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 20,
            color: colors.black,
            marginVertical: 14,
          }}
        >
          Select Request
        </Text>
        <View style={styles.requestContainer}>
          {[...Array(10)].map((elem, index) => {
            const selectedValues = fields.map(
              (elem, index) => elem.selected_req
            );
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  const isAlreadySelected = fields.some(
                    (elem) => elem.selected_req === index
                  );
                  if (!isAlreadySelected) {
                    append({
                      selected_req: index,
                    });
                  }
                }}
                style={{ width: "49%", marginBottom: 10 }}
              >
                <View
                  style={[
                    styles.selectContainer,
                    {
                      backgroundColor: selectedValues.includes(index)
                        ? colors.primary
                        : colors.white,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.selectTextHeader,
                      {
                        color: selectedValues.includes(index)
                          ? colors.white
                          : colors.black,
                      },
                    ]}
                  >
                    Ac not working
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginTop: 14 }}>
          <DropdownComponent
            control={control}
            dropDownData={data}
            name="description"
            placeholder="Select Description"
            selectLabel="label"
            selectValue="value"
            required={false}
            errors={errors.description}
            helperText="This field is required"
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Button
            title="+Add"
            onPress={() => {
              const selectedDescription = Number(watch("description"));
              const isAlreadySelected = fields.some(
                (elem) => elem.selected_req === selectedDescription
              );

              if (!isAlreadySelected && selectedDescription !== 0) {
                append({
                  selected_req: selectedDescription,
                });
              }
            }}
            color={colors.primary}
            type="clear"
          />
        </View>
        {fields?.map((elem, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#F6FBFF",
                borderRadius: 10,
                paddingVertical: 14,
                paddingHorizontal: 10,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Light",
                  fontSize: 16,
                  color: colors.pureblack,
                }}
              >
                Ac not working
              </Text>
              <Remove onPress={() => remove(index)} />
            </View>
          );
        })}

        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 20,
            color: colors.black,
            marginVertical: 14,
          }}
        >
          Priority
        </Text>
        <View style={styles.checkBoxContainer}>
          <View style={{ width: "36%" }}>
            <CustomCheckbox title="Normal" titleSize={16} />
          </View>
          <View style={{ width: "33%" }}>
            <CustomCheckbox title="Urgent" titleSize={16} />
          </View>
        </View>
        <CustomButton
          title="Register"
          color={colors.primary}
          ExStyle={{ marginTop: 10 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SrmsAdd;

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  requestContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  selectTextHeader: {
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    color: colors.black,
  },
  unSelectTextHeader: {
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    color: colors.white,
  },
  selectContainer: {
    borderRadius: 30,
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    width: "100%",
  },
  unSelectedContainer: {
    borderRadius: 30,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
  },
});
