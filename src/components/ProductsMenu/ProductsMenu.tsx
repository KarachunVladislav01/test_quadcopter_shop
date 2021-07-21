import * as React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";

import ProductCard from "../ProductCard/ProductCard";
import { _10, _16, _20, _248, _5, _124 } from "../constants/sizes";

const ProductsMenu = ({}) => {
    const list = [0, 0, 0];

    const scrollViewOptions = {
        horizontal: true,
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
        bounces: true,
        alwaysBounceHorizontal: true,
        alwaysBounceVertical: false,
    };

    return (
        <ScrollView {...scrollViewOptions}>
            {list.map((item, index) => (
                <ProductCard
                    style={index === 0 ? styles.firstChild : styles.card}
                />
            ))}
        </ScrollView>
    );
};

export default ProductsMenu;

const styles = StyleSheet.create({
    container: {
        height: _248,
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        marginRight: _16,
    },
    firstChild: {
        marginHorizontal: _16,
    },
});
