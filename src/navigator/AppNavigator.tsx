import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreeName} from '../utils/constants';
import {LoginStack} from '../Routes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreeName.ENTER_ORG_CODE_SCREEN}>
      {LoginStack?.map((item, index) => (
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

export default AppNavigator;
