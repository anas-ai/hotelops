import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TextBox} from '../../components/form/textBox';
import {useForm} from 'react-hook-form';
import {Icons, ScreeName} from '../../utils/constants';
import {globalStyles} from '../../utils/globalStyle';
import {Button} from '@rneui/themed';
import {colors} from '../../styles/colores';
import Logo from '../../assets/Images/Group.svg';
import CenterLogo from '../../assets/Images/girlq.svg';
import Mail from '../../assets/Images/mail.svg';
const ForgetPassword = (props: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {email: ''}});

  const onSubmit = (data: any) => {
    console.log(data);
    props.navigation.navigate(ScreeName.OTP_VERIFY);
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        contentContainerStyle={[globalStyles.scrollView]}>
        <Logo width={200} />
        <CenterLogo width={300} />
        <View style={globalStyles.fullWidth}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: colors.darkBlack,
                fontFamily: 'Gilroy-SemiBold',
              }}>
              Forgot password?
            </Text>
          </View>
          <View style={{marginTop: 5, marginBottom: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.black,
                fontFamily: 'Gilroy-Regular',
              }}>
              We will send a 4 digit code to your email id.
            </Text>
          </View>
          <TextBox
            control={control}
            errors={errors.email}
            name="email"
            placeholder="Enter Your Email"
            startIcon={<Mail width={24} height={24} />}
          />
        </View>
        <View style={[globalStyles.fullWidth, globalStyles.gutterVertical]}>
          <Button
            title="Send OTP"
            color="#179ED5"
            radius="md"
            size="lg"
            titleStyle={Styles.buttonTitleStyle}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const Styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 20,
    fontFamily: 'Gilroy-SemiBold',
  },
});
