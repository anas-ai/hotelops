import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../styles/colores";
import { globalStyles } from "../../../utils/globalStyle";
import { TextBox } from "../../../components/form/textBox";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/button";

function JobParkConfirmModal({isModalVisible,setModalVisible}:any) {
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      complaint: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("datadata", data);
  };
  return (
    <View style={{ flex: 1 }}>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Job Park Confirmation</Text>
          </View>
          <View style={{ margin: 16, rowGap: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subheading}>Confirmation for : </Text>
              <Text
                style={{
                  fontFamily: "Gilroy-Medium",
                  fontSize: 16,
                  color: colors.primary,
                }}
              >
                1118
              </Text>
            </View>
            <View>
              <TextBox
                control={control}
                errors={errors.complaint}
                name="complaint"
                placeholder="Complaint"
                numberOfLines={4}
                multiline={true}
              />
            </View>
            <View>
              <TextBox
                control={control}
                errors={errors.complaint}
                name="complaint"
                placeholder="Complaint"
              />
            </View>
            <View
              style={{ flexDirection: "row", width: "100%", columnGap: 20 }}
            >
              <CustomButton
                title="Save"
                color={colors.primary}
                ExStyle={{ flex: 1 }}
                size="lg"
              />
              <CustomButton
                title="Close"
                onPress={toggleModal}
                color={colors.white}
                ExStyle={{ borderWidth: 1, borderColor: "#E2EEF7", flex: 1 }}
                fontColor={colors.black}
                size="lg"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default JobParkConfirmModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
  },
  heading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 22,
    color: colors.black,
  },
  subheading: {
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    color: colors.black,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: 1,
  },
});
