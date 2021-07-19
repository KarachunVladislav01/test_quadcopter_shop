import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../../styles/theme";
import * as React from "react";

import OptionBtn from "../OptionBtn/OptionBtn";

// import {TouchableOpacity} from "react-native-gesture-handler";

const Home = ({}) => {
    return (
        <View style={[styles.container]}>
            <OptionBtn label="All" isSelected={false} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: theme.backgroundColorGrey,
    },
});
