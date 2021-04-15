import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';

export default () => {
    const offset = useRef(new Animated.Value(0)).current;
    const startAnimated = useRef(() => {
        const animationSlider = Animated.sequence([
            Animated.timing(offset, {
                toValue: 1,
                duration: 500,
                delay: 0,
                easing: Easing.linear,
            }),
            Animated.timing(offset, {
                toValue: 0,
                duration: 500,
                delay: 0,
                easing: Easing.linear,
            }),
        ]);
        Animated.loop(animationSlider).start();
    }).current;
    useEffect(() => {
        startAnimated();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>点我点我</Text>
            </View>
            <Animated.Image
                source={require('./assets/hand.png')}
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: offset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 20]
                                })
                            }
                        ],
                    }
                ]}>
            </Animated.Image>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'powderblue',
        borderRadius: 10
    }
})