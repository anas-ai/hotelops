import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { colors } from "../../styles/colores";
import { Icons, ScreeName } from "../../utils/constants";
import { Button } from "@rneui/base";
import { Controller, useForm } from "react-hook-form";
import { globalStyles } from "../../utils/globalStyle";
import { TextBox } from "../../components/form/textBox";
import Logo from "../../assets/Images/Group.svg";
import Phone from "../../assets/Images/phone.svg";
import Key from "../../assets/Images/key.svg";
import axiosInstance from "../../utils/axios";
import { URLS } from "../../api";
import { setItem } from "../../utils/asyncStorage";
const EnterOrgCodeScreen = (props: any) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { code: "" } });

  // const onSubmit = async (data: any) => {
  //   try {
  //     await axiosInstance
  //       .get(`${URLS.ORGANIZATION_SELECT}?OrganizationCode=${data?.code}`)
  //       .then(async (response: any) => {
  //         if (response?.data?.[0]?.Success === 1) {
  //           await setItem(
  //             "organizationId",
  //             response?.data?.[0]?.OrganizationID
  //           );
  //           props.navigation.navigate(ScreeName.SIGN_IN_SCREEN);
  //         } else {
  //           setError("code", {
  //             type: "manual",
  //             message:
  //               response?.data?.[0]?.ErrorMessage ||
  //               "Invalid organization code",
  //           });
  //         }
  //       })
  //       .catch((err: any) => {
  //         setError("code", {
  //           type: "manual",
  //           message:
  //             err?.data?.[0]?.ErrorMessage || "Invalid organization code",
  //         });
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmit = async () => {
    // Navigate to the Home Screen without validation
            props.navigation.navigate(ScreeName.SIGN_IN_SCREEN);
};
  
  console.log(errors.code?.message, "message");
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView contentContainerStyle={[globalStyles.scrollView]}>
        <Logo width={300} />
        <Phone width={300} />
        <View style={globalStyles.fullWidth}>
          <View>
            <Text style={Styles.heading}>Enter organization code</Text>
          </View>
          <View style={{ marginTop: 12, marginBottom: 18 }}>
            <TextBox
              control={control}
              errors={errors.code}
              name="code"
              required={false}
              placeholder="Organization Code"
              startIcon={<Key width={24} height={24} />}
            />
          </View>
          <View style={[globalStyles.fullWidth]}>
            <Button
              title="Sign In"
              color="#179ED5"
              radius="md"
              size="lg"
              loading={isSubmitting}
              titleStyle={Styles.buttonTitleStyle}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnterOrgCodeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  heading: {
    color: colors.black,
    fontSize: 28,
    fontFamily: "Gillroy-Bold",
  },

  buttonTitleStyle: {
    fontSize: 20,
    fontFamily: "Gillroy-SemiBold",
  },
  errorText: {
    color: "red",
  },
});
