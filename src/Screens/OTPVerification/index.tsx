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
import {Controller, useForm} from 'react-hook-form';
import {Icons, ScreeName} from '../../utils/constants';
import {globalStyles} from '../../utils/globalStyle';
import {Button} from '@rneui/themed';
import {colors} from '../../styles/colores';
import OTPTextView from 'react-native-otp-textinput';
import Logo from '../../assets/Images/Group.svg';
import CenterLogo from '../../assets/Images/otpLogo.svg';
const OTPVerification = (props: any) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({defaultValues: {otp: ''}});

  const onSubmit = (data: any) => {
    if (data.otp.length !== 4) {
      setError('otp', {
        type: 'manual',
        message: 'Please enter a valid 4-digit OTP.',
      });
    } else {
      console.log(data);
      props.navigation.navigate(ScreeName.RESET_PSWRD);
    }
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
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
              OTP verification
            </Text>
          </View>
          <View style={{marginTop: 5, marginBottom: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: colors.black,
                fontFamily: 'Gilroy-Regular',
              }}>
              Kindly check your inbox for OTP.
            </Text>
          </View>
          <Controller
            control={control}
            name="otp"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <OTPTextView
                handleTextChange={onChange}
                tintColor={colors.primary}
                defaultValue={value}
                textInputStyle={Styles.OTPInput}
                inputCount={4}
              />
            )}
          />
          {errors.otp && (
            <Text style={[Styles.errorText, {paddingLeft: 12}]}>
              This is required.
            </Text>
          )}
        </View>
        <View style={{marginTop: 4}}>
          <Text
            style={{
              fontSize: 16,
              color: colors.black,
              fontFamily: 'Gilroy-Regular',
            }}>
            Didn{'’'}t receive OTP code?{' '}
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                fontFamily: 'Gilroy-SemiBold',
              }}>
              Resend Code
            </Text>
          </Text>
        </View>
        <View style={[globalStyles.fullWidth, globalStyles.gutterVertical]}>
          <Button
            title="Verify"
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

export default OTPVerification;

const Styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 20,
    fontFamily: 'Gilroy-SemiBold',
  },
  OTPInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    color: colors.primary,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#F6FBFF', // Background for OTP inputs
  },
  errorText: {
    color: 'red',
  },
});
