import { ActivityIndicator, View } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigator/AppNavigator";
import { enableScreens } from "react-native-screens";
import { useAuth } from "./src/hooks/useAuth";
import { AuthProvider } from "./src/context/Auth/AuthContext";
import { AuthNavigator } from "./src/navigator/AuthNavigator";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
enableScreens();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const { userToken, isLoading } = useAuth();

  if (isLoading) {
    // Show a loader while the app is checking the login state
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <View style={{paddingTop: StatusBar.currentHeight}}>
        <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
        {...props}
        />
        </View> */}
        {userToken ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
