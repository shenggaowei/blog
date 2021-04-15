import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

export default () => {
    const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
        }).start();
    }, []);

    return <View style={styles.container}>
        <Animated.View style={
            [
                {
                    opacity: animation,
                    transform: [{
                        rotateZ: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '720deg']
                        })
                    }]
                }]}>
            <Animated.Text style={{
                fontSize: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 24]
                })
            }}>
                😄😄升高😄😄
            </Animated.Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});