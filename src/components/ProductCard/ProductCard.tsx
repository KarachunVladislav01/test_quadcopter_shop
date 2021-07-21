import * as React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import {
    _12,
    _14,
    _16,
    _50,
    _168,
    _18,
    _204,
    _248,
    _67,
    _4,
} from "../constants/sizes";

import { ProductCardProps } from "./ProductCardProps";

import Icon from "../Icon/Icon";

const dron = require("../../assets/img/DJIAir2S.png");

const ProductCard: React.FC<ProductCardProps> = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={dron} style={[styles.img]} />

            <View style={[styles.description]}>
                <Text style={[styles.textColor, fontClasses.semiBold]}>
                    DJI Air 2S
                </Text>
                <View style={[styles.buttomDescription]}>
                    <Text style={[styles.textColor, fontClasses.boldSmall]}>
                        1424 $
                    </Text>
                    <View style={[styles.ratingWrapper]}>
                        <Icon
                            name="ratingStar"
                            size={_14}
                            style={[styles.starIcon]}
                        ></Icon>
                        <Text style={[styles.textColor, fontClasses.semiBold]}>
                            4.2
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        height: _248,
        width: _204,
        display: "flex",

        borderStyle: "solid",
        borderWidth: styleConstants.borderWidth,
        borderRadius: styleConstants.borderRadius_M,
        borderColor: theme.gray50,

        backgroundColor: theme.white0,
    },
    img: {
        resizeMode: "cover",
        height: _168,
        width: "100%",
        // backgroundColor: "green",
    },

    description: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",

        marginTop: _12,
        paddingBottom: _16,
        paddingLeft: _16,
        paddingRight: _18,
        // backgroundColor: "red",
    },
    buttomDescription: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    starIcon: {
        marginRight: _4,
    },
    textColor: {
        color: theme.black50,
    },
});
