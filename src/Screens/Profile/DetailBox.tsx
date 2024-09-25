import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/globalStyle';
import BackButtonHead from '../../components/backButtonHead';
import ProfileBlue from '../../assets/Images/profileBlue.svg';
import {colors} from '../../styles/colores';
import {Divider} from '@rneui/base';
const DetailBox = ({props}: any) => {
  return (
    <View style={[globalStyles.fullWidth, {marginVertical: 10}]}>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 30,
          backgroundColor: '#F0F8FE',
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            columnGap: 18,
          }}>
          <ProfileBlue width={60} height={60} />
          <View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Gilroy-Medium',
                color: colors.black,
                marginBottom: 4,
              }}>
              Yashwant Mali
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Gilroy-Regular',
                  color: colors.black,
                }}>
                Bell Attendent
              </Text>
              <Divider orientation="vertical" style={{marginHorizontal: 8}} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Gilroy-Regular',
                  color: colors.black,
                }}>
                Front Office
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            rowGap: 20,
            marginTop: 18,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              DOJ :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
                flex: 1,
              }}>
              22 Apr 2024
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              Level :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
              }}>
              A
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              Tenure :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
              }}>
              795
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              Confirm Status :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
              }}>
              Yes
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              Date of Confirmation :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
                flex: 1,
              }}>
              03 Jun 2024
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: colors.black,
              }}>
              Report to Designation :{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Medium',
                color: colors.primary,
                flex: 1,
              }}>
              Front Office Manager
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailBox;
