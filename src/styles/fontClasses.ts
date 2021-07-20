import { StyleSheet } from "react-native";

import {
    _14,
    _16,
    _17,
    _20,
    _22,
    _24,
    _32,
} from "../components/constants/sizes";

export const fontClasses = StyleSheet.create({
    baseLine: {
        fontSize: _16,
        lineHeight: _22,
        fontFamily: "Lato-Regular",
    },
    boldSmall: {
        fontSize: _16,
        lineHeight: _22,
        fontFamily: "Lato-Bold",
    },
    boldBig: {
        fontSize: _20,
        lineHeight: _24,
        fontFamily: "Lato-Bold",
    },
    semiBold: {
        fontSize: _14,
        lineHeight: _17,
        fontFamily: "Lato-Semibold",
    },
    extraBold: {
        fontSize: _24,
        lineHeight: _32,
        fontFamily: "Lato-Heavy",
    },
});
