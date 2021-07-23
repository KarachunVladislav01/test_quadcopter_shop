import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "../../styles/theme";

import NavigationBar from "../NavigationBar/NavigationBar";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <View style={[styles.container]}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"NavigationBar"}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="NavigationBar"
                        component={NavigationBar}
                    />
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
