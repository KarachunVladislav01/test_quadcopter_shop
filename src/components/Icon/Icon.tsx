import React from "react";
import { Image, StyleSheet } from "react-native";

import { IconProps } from "./iconProps";

import burgerMenu from "../../assets/icons/burgerMenu.png";
import home from "../../assets/icons/home.png";
import searchDefault from "../../assets/icons/searchDefault.png";

import { _32 } from "../constants/sizes";

const iconList: { [key: string]: any } = {
    burgerMenu,
    home,
    searchDefault,
};

const Icon: React.FC<IconProps> = ({
    style,
    name,
    width,
    height,
    size = _32,
}) => {
    return (
        <Image
            source={iconList[name]}
            style={[
                styles.container,
                { width: width || size, height: height || size },
                style,
            ]}
        />
    );
};

export default Icon;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
