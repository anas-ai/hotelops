import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextBox } from "../../components/form/textBox";
import { useForm } from "react-hook-form";
import { ScreeName } from "../../utils/constants";
import { globalStyles } from "../../utils/globalStyle";
import { Button } from "@rneui/themed";
import { colors } from "../../styles/colores";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../assets/Images/Group.svg";
import RadissonLogo from "../../assets/Images/radison.svg";
import Profile from "../../assets/Images/profile.svg";
import Lock from "../../assets/Images/lock.svg";
import { URLS } from "../../api";
import axiosInstance from "../../utils/axios";
const SignScreen = (props: any) => {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { username: "", password: "" } });

  const onSubmit = async (data: any) => {
    try {
      const token = "demoToken123";
      login(token);
      // await axiosInstance
      //   .get(
      //     `${URLS.ORGANIZATION_LOGIN}?UserName=${data?.username}&Password=${data?.password}&AuthToken=ckDfl7u6TNqwz3gyAemC4l:APA91bGGij630umTCDS_7HM82xznQSY2evyIBAOd842mTsqQsqNYTsol1pdUE3cQTaKgBLnS0OcNzLQppTMjnHCKXgdBvM-STol3jtB4K8CNqC-VUjgFb5Z0EWr3YwrTu5RyzNZOKCuk`
      //   )
      //   .then((response: any) => {
      //     console.log(response, "login repsonse");
      //     const token = "demoToken123";
      //     login(token);
      //   })
      //   .catch((err: any) => {
      //     setError("username", {
      //       type: "manual",
      //       message: err || "Invalid organization code",
      //     });
      //     console.log(err, "error");
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView contentContainerStyle={[globalStyles.scrollView]}>
        <Logo width={300} />
        <RadissonLogo width={300} />
        <View style={globalStyles.fullWidth}>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 28,
                color: colors.black,
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              Sign In
            </Text>
          </View>

          <TextBox
            control={control}
            errors={errors.username}
            name="username"
            placeholder="Username"
            required={true}
            startIcon={<Profile width={24} height={24} />}
          />

          <View style={[globalStyles.gutterVertical]}>
            <TextBox
              control={control}
              errors={errors.password}
              name="password"
              required={true}
              placeholder="Password"
              startIcon={<Lock width={24} height={24} />}
            />
            <View style={{ alignItems: "flex-end", marginTop: 4 }}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(ScreeName.FORGET_PSWRD)
                }
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.primary,
                    fontWeight: "400",
                  }}
                >
                  Forget password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[globalStyles.fullWidth]}>
            <Button
              title="Sign In"
              color={colors.primary}
              loading={isSubmitting}
              radius="md"
              size="lg"
              titleStyle={Styles.buttonTitleStyle}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignScreen;

const Styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 20,
    fontFamily: "Gilroy-SemiBold",
  },
});
