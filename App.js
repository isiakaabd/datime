import { useFonts } from "expo-font";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Splash,
  Login,
  CreatePin,
  ForgotPassword,
  SignUp,
  Home,
} from "./src/pages";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Mulish: require("./src/assets/fonts/Mulish-Regular.ttf"),
    MulishBold: require("./src/assets/fonts/Mulish-Bold.ttf"),
    MulishSemiBold: require("./src/assets/fonts/Mulish-SemiBold.ttf"),
  });
  const theme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
      green: "#84A625",
      yellow: "#FBE5C2",
      black: "#000",
      whiteGrey: "#E8E8E8",
      primary: "#822E6F",
    },
    font: {
      fontFamily: "Mulish",
      fontSize: 90,
    },
  };

  // const onLayoutRootView = useCallback(async () => {
  //   if (loaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [loaded]);
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
