import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

export default () => {
    const animationArray = Array.from({ length: 3 }).map(() => new Animated.Value(0));
    const animations = useRef(animationArray).current;
    useEffect(() => {
        Animated.sequence(
            [
                // 向右移动
                ...animations.map(anim => {
                    return Animated.timing(anim, {
                        toValue: 1,
                        duration: 600,
                        easing: Easing.linear,
                        useNativeDriver: true
                    })
                }),
                // 延迟600毫秒
                Animated.delay(600),
                // 向左移动，返回原始状态
                ...animations.map(anim => {
                    return Animated.timing(anim, {
                        toValue: 0,
                        duration: 600,
                        easing: Easing.linear,
                        useNativeDriver: true
                    })
                }).reverse()
            ]
        ).start();
    }, [])

    return (
        <View style={styles.box}>
            {
                animations.map((anim, index) => {
                    return (
                        <Animated.View
                            style={
                                [
                                    styles.list,
                                    styles[`list${index + 1}`],
                                    {
                                        transform: [
                                            {
                                                translateX: anim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, 80],
                                                })
                                            }
                                        ],
                                        opacity: anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 0.5]
                                        })
                                    }
                                ]
                            }
                        />
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: 100,
        height: 50,
        borderRadius: 15,
        marginBottom: 5
    },
    list1: {
        backgroundColor: 'orange'
    },
    list2: {
        backgroundColor: 'purple'
    },
    list3: {
        backgroundColor: 'pink'
    }
});