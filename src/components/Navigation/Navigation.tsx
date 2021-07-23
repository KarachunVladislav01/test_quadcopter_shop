import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "../../styles/theme";
import { SCREENS } from "./constants";

import NavigationBar from "../NavigationBar/NavigationBar";
import OrderPage from "../OrderPage/OrderPage";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <View style={[styles.container]}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={SCREENS.NAVIGATION_BAR}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name={SCREENS.NAVIGATION_BAR}
                        component={NavigationBar}
                    />

                    <Stack.Screen name={SCREENS.ORDER} component={OrderPage} />
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
