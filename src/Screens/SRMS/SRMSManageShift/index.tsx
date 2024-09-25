import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import Tick from "../../../assets/Images/whiteTick.svg";
import { colors } from "../../../styles/colores";
import { useForm } from "react-hook-form";
import DropdownComponent from "../../../components/form/dropdown";
import { TextBox } from "../../../components/form/textBox";
import CustomButton from "../../../components/button";

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

const SRMSManageShift = (props: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employee: "",
      location: "",
      number: "",
      shift: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={{ marginBottom: 20 }}>
          <BackButtonHead title="Manage Shift" props={props} />
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeadText}>Level 1</Text>
          <View style={styles.row}>
            <Text style={styles.cardHeadText}>Login</Text>
            <Tick />
          </View>
        </View>

        <View style={styles.cardContent}>
          <DropdownComponent
            control={control}
            dropDownData={data}
            bgColor={colors.white}
            name="employee"
            placeholder="Employee"
            selectLabel="label"
            selectValue="value"
            required={false}
            borderColor={colors.white}
            errors={errors.employee}
            helperText="This field is required"
          />
          <TextBox
            control={control}
            bgColor={colors.white}
            errors={errors.location}
            name="location"
            borderColor={colors.white}
            placeholder="All Areas"
          />
          <TextBox
            control={control}
            errors={errors.number}
            bgColor={colors.white}
            borderColor={colors.white}
            name="number"
            placeholder="Number"
            keyboardType="number-pad"
          />
          <DropdownComponent
            control={control}
            dropDownData={data}
            bgColor={colors.white}
            name="shift"
            placeholder="Shift"
            borderColor={colors.white}
            selectLabel="label"
            selectValue="value"
            required={false}
            errors={errors.shift}
            helperText="This field is required"
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Save"
          color={colors.primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SRMSManageShift;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  cardHeader: {
    backgroundColor: "#D6E8F1",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    rowGap: 14,
    backgroundColor: "#F0F8FE",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  cardHeadText: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    color: colors.black,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
});
