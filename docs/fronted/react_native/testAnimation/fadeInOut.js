import React, { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

export default () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    }, []);
    return <View style={styles.container}>
        <Animated.View
            style={[
                styles.fadingContainer,
                {
                    opacity: fadeAnim
                }
            ]}
        >
            <Text style={styles.fadingText}>我出现了</Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
});