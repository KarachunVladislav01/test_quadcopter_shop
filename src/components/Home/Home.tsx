import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";
import t from "../language/en.json";

import Header from "../Header/Header";
import RecomendationCard from "../RecomendationCard/RecomendationCard";
import OptionBtn from "../OptionBtn/OptionBtn";

const Home = ({}) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <Header />
            <RecomendationCard />

            <OptionBtn label={t.all} isSelected={false} onPress={() => {}} />
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
