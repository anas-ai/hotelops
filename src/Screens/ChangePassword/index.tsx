import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { TextBox } from "../../components/form/textBox";
import { useForm } from "react-hook-form";
import { Icons, ScreeName } from "../../utils/constants";
import { globalStyles } from "../../utils/globalStyle";
import { Button } from "@rneui/themed";
import { colors } from "../../styles/colores";
import Logo from "../../assets/Images/Group.svg";
import Lock from "../../assets/Images/lock.svg";
import CenterLogo from "../../assets/Images/resetLogo.svg";
import BackButtonHead from "../../components/backButtonHead";
const ChangePasswordScreen = (props: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { password: "", confirm_password: "" } });

  const onSubmit = (data: any) => {
    console.log(data);
    props.navigation.navigate(ScreeName.SIGN_IN_SCREEN);
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <BackButtonHead title="Change Password" props={props} />
        <CenterLogo width={386} />
        <View style={globalStyles.fullWidth}>
          <TextBox
            control={control}
            errors={errors.password}
            name="password"
            placeholder="Password"
            startIcon={<Lock width={24} height={24} />}
          />

          <View style={[globalStyles.gutterVertical]}>
            <TextBox
              control={control}
              errors={errors.confirm_password}
              name="confirm_password"
              placeholder="Confirm password"
              startIcon={<Lock width={24} height={24} />}
            />
          </View>
          <View style={[globalStyles.fullWidth]}>
            <Button
              title="Sign In"
              color={colors.primary}
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

export default ChangePasswordScreen;

const Styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 20,
    fontFamily: "Gilroy-SemiBold",
  },
});
