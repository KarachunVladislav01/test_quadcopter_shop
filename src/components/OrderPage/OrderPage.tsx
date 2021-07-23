import * as React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import t from "../../language/en.json";
import { _12, _16, _24, _281, _36, _8 } from "../../constants/sizes";

import { getQuadcopter } from "../../redux/redusers/quadcopters.reducer";

import BackHeader from "../BackHeader/BackHeader";

const OrderPage = () => {
    const route = useRoute<any>();

    const { index } = route.params;

    const quadcopter = useSelector((state) => getQuadcopter(state, index));

    const { name, description, price, img } = quadcopter;

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <BackHeader />
            <View style={[styles.imgWrapper]}>
                <Image
                    source={{ uri: `data:image/png;base64,${img}` }}
                    style={[styles.img]}
                />
            </View>
            <Text style={[fontClasses.baseLine, { color: theme.black50 }]}>
                {t.ordinaryQuadcopter}
            </Text>
            <Text style={[fontClasses.extraBoldBig, styles.nameText]}>
                {name}
            </Text>
            <Text style={[fontClasses.boldBig, styles.priceText]}>
                {`${price} $`}
            </Text>
            <Text style={[fontClasses.baseLine, { color: theme.gray300 }]}>
                {description}
            </Text>
        </SafeAreaView>
    );
};

export default OrderPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white0,
        paddingHorizontal: _16,
    },
    imgWrapper: {
        height: _281,
        width: "100%",
        marginBottom: _24,
    },
    img: {
        resizeMode: "cover",
        height: "100%",
        width: "100%",
    },
    nameText: { color: theme.black50, marginBottom: _8 },
    priceText: { color: theme.blue50, marginBottom: _12 },
    descriptionText: { color: theme.gray300, marginBottom: _36 },
});
