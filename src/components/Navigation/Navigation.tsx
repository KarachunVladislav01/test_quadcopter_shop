import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";

import Header from "../Header/Header";
import Home from "../Home/Home";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <View style={[styles.container]}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"Home"}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColorGrey,
    },
});
