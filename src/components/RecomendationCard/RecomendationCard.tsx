import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import { _16, _164, _233, _20, _22, _32 } from "../constants/sizes";

const udoDron = require("../../assets/img/udoDron.png");

const RecomendationCard = ({}) => {
    return (
        <View style={[styles.wrapper]}>
            <View style={[styles.container]}>
                <Image source={udoDron} style={[styles.img]} />

                <Text style={[fontClasses.semiBold, styles.textColor]}>
                    Need for Speed
                </Text>
                <Text style={[fontClasses.extraBold, styles.textColor]}>
                    UdoDron 3 Pro
                </Text>
                <Text style={[fontClasses.boldBig, styles.textColor]}>
                    1984 $
                </Text>
            </View>
        </View>
    );
};

export default RecomendationCard;

const styles = StyleSheet.create({
    wrapper: {
        height: _164,
        width: "100%",
        paddingHorizontal: _16,
        marginTop: _22,
        marginBottom: _32,
    },
    container: {
        position: "relative",

        display: "flex",

        justifyContent: "flex-end",

        height: "100%",
        width: "100%",

        paddingBottom: _20,
        paddingLeft: _20,

        borderRadius: styleConstants.borderRadius_L,
        backgroundColor: theme.blue50,
    },
    img: {
        position: "absolute",
        right: 0,

        height: _164,
        width: _233,
        resizeMode: "cover",
    },
    textColor: {
        color: theme.white0,
    },
});
