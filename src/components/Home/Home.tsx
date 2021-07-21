import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";

import Header from "../Header/Header";
import RecomendationCard from "../RecomendationCard/RecomendationCard";
import FilterList from "../FilterList/FilterList";
import ProductCard from "../ProductCard/ProductCard";

const Home = ({}) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <Header />
            <RecomendationCard />

            <FilterList />

            <ProductCard />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: theme.backgroundColorGrey,
    },
});
