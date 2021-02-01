import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";
import { View, ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator();

const Auth = createStackNavigator();

const TrackDetails = createStackNavigator();

const DetailsFlow = () => (
  <TrackDetails.Navigator>
    <TrackDetails.Screen name="TrackListScreen" component={TrackListScreen} />
    <TrackDetails.Screen
      name="TrackDetailScreen"
      component={TrackDetailScreen}
    />
  </TrackDetails.Navigator>
);

const MainFlow = () => (
  <Tab.Navigator>
    <Tab.Screen name="TrackListScreen" component={DetailsFlow} />
    <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
    <Tab.Screen name="AccountScreen" component={AccountScreen} />
  </Tab.Navigator>
);

const AuthFlow = () => (
  <Auth.Navigator initialRouteName="SignUp">
    <Auth.Screen
      name="SignUp"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="SignIn"
      component={SigninScreen}
      options={{ headerShown: false }}
    />
  </Auth.Navigator>
);

const App = () => {
  const { state } = useContext(AuthContext);
  if (state.loading) {
    return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={666} />
    </View>);
  }

  return (
    <NavigationContainer>
      {state.token !== null ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
