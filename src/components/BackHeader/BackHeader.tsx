import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconBtn from "../IconBtn/IconBtn";

import { _19, _24, _25, _28, _44, _52, _8 } from "../../constants/sizes";

const BackHeader = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container]}>
            <IconBtn name={"backArrow"} size={_44} onPress={(_) => goBack()} />
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",

        height: _52,
        width: "100%",

        marginTop: _8,
        backgroundColor: "transparent",
    },
});
