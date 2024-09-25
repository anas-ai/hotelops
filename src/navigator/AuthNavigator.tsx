import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreeName} from '../utils/constants';
import {AuthStack, LoginStack} from '../Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export const AuthNavigatorDrawer = () => {
  return (
    <Stack.Navigator initialRouteName={ScreeName.ENTER_ORG_CODE_SCREEN}>
      {AuthStack?.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item?.name}
          component={item?.component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: '80%', borderRadius: 50},
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="mainauth" component={AuthNavigatorDrawer} />
    </Drawer.Navigator>
  );
};
