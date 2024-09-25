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
import { getItem } from "../../../utils/asyncStorage";
import dayjs from "dayjs";
import axiosInstance from "../../../utils/axios";
import { URLS } from "../../../api";
const EntryForm = ({ id }: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors,isSubmitting },
  } = useForm({
    defaultValues: {
      report_date: "",
      incident_date: "",
      time: "",
      location: "",
      accident_cause: "",
      any_casuality: "",
      description: "",
      damage_caused: "",
      investigation: "",
      investigation_by: "",
      personnel_report_incident: "",
      personnel_present_incident: "",
      report_made_by: "",
    },
  });
console.log(errors,'errorserrors');

  const onSubmit = async (data: any) => {
    const organizationId = await getItem<string>("organizationId");
    const formData = new FormData();
    const fields = {
      OID: organizationId,
      UID: "144",
      ReportDate:
        data?.report_date && dayjs(data.report_date).format("YYYY-MM-DD"),
      IncidentDate:
        data?.incident_date && dayjs(data.incident_date).format("YYYY-MM-DD"),
      Time: data?.time && dayjs(data.time).format("hh:mm a"),
      Location: data?.location,
      AccidentCause: data?.accident_cause,
      Anycasualty: data?.any_casuality,
      Description: data?.description,
      Damagedcaused: data?.damage_caused,
      Investigation: data?.investigation,
      InvestigatedBy: data?.investigation_by,
      PresentDuringIncident: data?.personnel_present_incident,
      ReportTo: data?.personnel_report_incident,
      ReportBy: data?.report_made_by,
    };

    Object.entries(fields).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await axiosInstance
        .post(`${URLS.POST_INCIDENT_ENTRY}`, formData)
        .then((response: any) => {
          console.log(response, "formpost");
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error, "Incident Entry Error");
    }
  };

  const [isTimePickerVisible, setTimePickerVisible] = useState<boolean>(false);
  const [isReportDatePickerVisible, setReportDatePickerVisible] =
    useState<boolean>(false);
  const [isIncidentDatePickerVisible, setIncidentDatePickerVisible] =
    useState<any>(false);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const showReportDatePicker = () => {
    setReportDatePickerVisible(true);
  };
  const showIncidentDatePicker = () => {
    setIncidentDatePickerVisible(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const hideReportDatePicker = () => {
    setReportDatePickerVisible(false);
  };
  const hideIncidentDatePicker = () => {
    setIncidentDatePickerVisible(false);
  };
  const handleConfirmTime = (date: any) => {
    setValue("time", date?.toLocaleTimeString());
    hideTimePicker();
  };

  const handleConfirmReportDate = (date: any) => {
    setValue("report_date", date?.toLocaleDateString());
    hideReportDatePicker();
  };
  const handleConfirmIncidentDate = (date: any) => {
    setValue("incident_date", date?.toLocaleDateString());
    hideIncidentDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="report_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showReportDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Report Date"
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
            isVisible={isReportDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmReportDate}
            onCancel={hideReportDatePicker}
          />
        </View>

        <View style={[globalStyles.fullWidth, { flex: 1 }]}>
          <Controller
            control={control}
            name="incident_date"
            rules={{ required: false }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TouchableOpacity onPress={showIncidentDatePicker}>
                <View style={[styles.inputContainerStyle]}>
                  <TextInput
                    placeholder="Incident Date"
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
            isVisible={isIncidentDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmIncidentDate}
            onCancel={hideIncidentDatePicker}
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
          <TextBox
            control={control}
            errors={errors.location}
            name="location"
            placeholder="Location"
          />
        </View>
      </View>

      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.accident_cause}
          name="accident_cause"
          placeholder="Accident Cause"
          // keyboardType='number-pad'
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.any_casuality}
          name="any_casuality"
          placeholder="Any Casualty"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.description}
          name="description"
          placeholder="Description"
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.damage_caused}
          name="damage_caused"
          placeholder="Damage Caused"
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.investigation}
          name="investigation"
          placeholder="Investigation"
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.investigation_by}
          name="investigation_by"
          placeholder="Investigation By"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.personnel_report_incident}
          name="personnel_report_incident"
          placeholder="Personnel reporting incident"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.personnel_present_incident}
          name="personnel_present_incident"
          placeholder="Personnel present during incident"
        />
      </View>
      <View style={[globalStyles.fullWidth, { flex: 1 }]}>
        <TextBox
          control={control}
          errors={errors.report_made_by}
          name="report_made_by"
          placeholder="Report Made By"
        />
      </View>
      <View>
        <CustomButton
          title={id == "new" ? "Submit" : "Update"}
          ExStyle={{}}
          type="solid"
          color={colors.primary}
          radius="md"
          fontSize={20}
          loading={isSubmitting}
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
