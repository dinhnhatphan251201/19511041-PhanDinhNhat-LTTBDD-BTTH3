import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import ForgotPassword from "../components/ForgotPassword";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default AppStack;
