import * as React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import { fontClasses } from "../../styles/fontClasses";

import t from "../../language/en.json";
import ProductCard from "../ProductCard/ProductCard";
import { _16, _20, _28 } from "../../constants/sizes";

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
        <View style={[styles.container]}>
            <Text
                style={[styles.menuHeader, fontClasses.boldBig]}
            >{`${t.all} ${t.quadcopters}`}</Text>
            <ScrollView style={[styles.scrollContainer]} {...scrollViewOptions}>
                {list.map((item, index) => (
                    <ProductCard
                        key={index}
                        style={index === 0 ? styles.firstChild : styles.card}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ProductsMenu;

const styles = StyleSheet.create({
    container: {
        marginBottom: _28,
    },
    menuHeader: {
        paddingHorizontal: _16,
    },

    scrollContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: _20,
    },
    card: {
        marginRight: _16,
    },
    firstChild: {
        marginHorizontal: _16,
    },
});
