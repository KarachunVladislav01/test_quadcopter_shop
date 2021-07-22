import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { styleConstants } from "../../styles/constants";
import { _16, _24, _39, _40, _96 } from "../../constants/sizes";

import Home from "../Home/Home";
import TemplateScreen from "../TemplateScreen/TemplateScreen";
import Icon from "../Icon/Icon";

const Tab = createBottomTabNavigator();

const NavigationBar = ({}) => {
    const focusedIcon = "Focused";
    const defaultIcon = "Default";

    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    style: [styles.container],
                    showLabel: false,
                    tabStyle: [styles.tab],
                    // itemPositioning={"center"},
                    safeAreaInsets: { top: _24 },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <Icon
                                name={`home${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Liked"
                    children={() => <TemplateScreen pageName="Liked" />}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <Icon
                                name={`heart${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    // component={()=>{<TemplateScreen />}
                    children={() => <TemplateScreen pageName="Search" />}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <Icon
                                name={`search${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Shop"
                    children={() => <TemplateScreen pageName="Shop" />}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <Icon
                                name={`shop${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default NavigationBar;

const styles = StyleSheet.create({
    container: {
        display: "flex",

        height: _96,
        borderTopWidth: 0,

        borderTopLeftRadius: styleConstants.borderRadius_M,
        borderTopRightRadius: styleConstants.borderRadius_M,

        shadowColor: styleConstants.shadowColor,
        shadowOpacity: styleConstants.shadowOpacity,
        shadowOffset: styleConstants.shadowOffset,
        shadowRadius: styleConstants.shadowRadius,
        elevation: 0,
    },
    tab: {
        display: "flex",
        paddingBottom: _24,
    },
});
