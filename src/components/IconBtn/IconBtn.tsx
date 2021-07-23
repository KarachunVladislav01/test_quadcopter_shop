import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Icon from "../Icon/Icon";
import { IconBtnProps } from "./IconBtnProps";

const IconBtn: React.FC<IconBtnProps> = ({
    style,
    onPress,
    name,
    width,
    height,
    size,
    activeOpacity = 0.6,
}) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
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
