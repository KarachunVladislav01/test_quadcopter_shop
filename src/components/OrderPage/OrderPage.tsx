import * as React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

import theme from "../../styles/theme";

import BackHeader from "../BackHeader/BackHeader";

const OrderPage = () => {
    const route = useRoute<any>();

    const { index } = route.params;

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <BackHeader />
            <Text>{`IA NOMER ${index}`}</Text>
        </SafeAreaView>
    );
};

export default OrderPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.backgroundColorGrey,
    },
});
