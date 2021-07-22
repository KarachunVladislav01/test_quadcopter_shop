import { StyleSheet } from "react-native";

import {
    _14,
    _16,
    _17,
    _20,
    _22,
    _24,
    _32,
} from "../constants/sizes";

export const fontClasses = StyleSheet.create({
    baseLine: {
        fontSize: _16,
        lineHeight: _22,
        fontStyle: "normal",
        fontFamily: "Lato-Regular",
    },
    boldSmall: {
        fontSize: _16,
        lineHeight: _22,
        fontStyle: "normal",
        fontFamily: "Lato-Bold",
    },
    boldBig: {
        fontSize: _20,
        lineHeight: _24,
        fontStyle: "normal",
        fontFamily: "Lato-Bold",
    },
    semiBold: {
        fontSize: _14,
        lineHeight: _17,
        fontStyle: "normal",
        fontWeight: "bold",
        fontFamily: "Lato-Bold",
    },
    extraBold: {
        fontSize: _24,
        lineHeight: _32,
        fontStyle: "normal",
        fontFamily: "Lato-Heavy",
    },
});
