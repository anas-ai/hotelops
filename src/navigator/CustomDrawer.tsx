import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../styles/colores';
import Close from '../assets/Images/close.svg';
import Radisson from '../assets/Images/raddisonWhite.svg';
import Profile from '../assets/Images/profileDraw.svg';
import Lock from '../assets/Images/lockDrawer.svg';
import Logout from '../assets/Images/logOut.svg';
import {ScreeName} from '../utils/constants';
import {useAuth} from '../hooks/useAuth';
const CustomDrawer = (props: any) => {
  const {logout} = useAuth();
  return (
    <LinearGradient
      colors={[colors.primary, '#55CEFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <Close
          width={40}
          height={40}
          onPress={() => props.navigation.closeDrawer()}
        />
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Radisson width={203} />
        </View>
        <View style={{rowGap: 22, marginTop: 10, marginLeft: 16}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ScreeName.PROFILE)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 16,
              }}>
              <Profile width={40} height={40} />
              <Text
                style={{
                  fontSize: 18,
                  color: colors.white,
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ScreeName.CHANGE_PSWRD)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 16,
              }}>
              <Lock width={40} height={40} />
              <Text
                style={{
                  fontSize: 18,
                  color: colors.white,
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Change Password
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 16,
              }}>
              <Logout width={40} height={40} />
              <Text
                style={{
                  fontSize: 18,
                  color: colors.white,
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft: 25,
    paddingTop: 25,
  },
  gradient: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  drawerContent: {
    flex: 1,
  },
});

export default CustomDrawer;
