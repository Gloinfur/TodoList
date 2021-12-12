import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {COLORS} from '../assets/colors.js';

const Task = (props) => {
    return (
        <View style={styles.taskItem}>
            <View style={styles.itemLeft}>
                <View style={styles.itemSquare}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemRight}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        marginBottom: 10,
        backgroundColor: COLORS.grey,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },

    itemSquare: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.lightGrey,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },

    itemText: {
        color: COLORS.lightGrey,
        maxWidth: "80%",
    },

    itemRight: {
        width: 12,
        height: 12,
        borderColor: COLORS.orange,
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;