import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import t from "../../language/en.json";
import { _16, _14, _28 } from "../../constants/sizes";

import OptionBtn from "../OptionBtn/OptionBtn";

const FilterList = ({}) => {
    return (
        <View style={[styles.wrapper]}>
            <View style={[styles.container]}>
                <OptionBtn label={t.all} isSelected={true} onPress={() => {}} />
                <OptionBtn
                    label={t.cheap}
                    isSelected={false}
                    onPress={() => {}}
                />
                <OptionBtn
                    label={t.best}
                    isSelected={false}
                    onPress={() => {}}
                />
                <OptionBtn
                    label={t.fast}
                    isSelected={false}
                    onPress={() => {}}
                />
            </View>
        </View>
    );
};

export default FilterList;

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        paddingLeft: _16,
        paddingRight: _14,
        marginBottom: _28,
    },
    container: {
        position: "relative",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
