// loop 循环动画
import React, { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet, Easing } from "react-native";

export default () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animationFunc = useRef(() => Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
    })).current;

    useEffect(() => {
        Animated.loop(animationFunc(), {
            useNativeDriver: true,
        }).start()
    }, [])
    return <View style={styles.container}>
        <Animated.View
            style={[
                styles.fadingContainer,
                {
                    transform: [{
                        rotateZ: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }]
                }
            ]}
        >
            <Text style={styles.fadingText}>😄</Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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