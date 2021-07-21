import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "../Icon/Icon";
import { IconBtnProps } from "./IconBtnProps";

// import { _19, _24, _28, _52, _8 } from "../constants/sizes";

const IconBtn: React.FC<IconBtnProps> = ({
    style,
    name,
    width,
    height,
    size,
    activeOpacity = 0.6,
}) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity}>
            <View style={[styles.container]}>
                <Icon
                    style={style}
                    name={name}
                    width={width}
                    height={height}
                    size={size}
                />
            </View>
        </TouchableOpacity>
    );
};

export default IconBtn;

const styles = StyleSheet.create({
    container: {},
});
