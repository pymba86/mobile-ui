import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    View
} from 'react-native'

let isCalled = false;
let timer: number;

function callOnceInInterval(functionTobeCalled: any, interval = 400) {
    if (!isCalled) {
        isCalled = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
            isCalled = false
        }, interval);
        return functionTobeCalled()
    }
    return false
}

function Touchable({
                       style,
                       withoutFeedback,
                       highlight,
                       children,
                       delay,
                       onPress,
                       ...other
                   }: any) {
    if (withoutFeedback) {
        return (
            <TouchableOpacity
                style={style}
                activeOpacity={1}
                {...other}
                onPress={delay ? () => callOnceInInterval(onPress) : onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }

    return (
        <View style={style}>
            <TouchableNativeFeedback
                {...other}
                onPress={delay ? () => callOnceInInterval(onPress) : onPress}
            >
                <View style={styles.touchable}/>
            </TouchableNativeFeedback>
            {children}
        </View>
    )
}

Touchable.defaultProps = {
    style: undefined,
    withoutFeedback: false,
    highlight: false,
    delay: true,
    onPress: Function.prototype
};

export default Touchable;

const styles = StyleSheet.create({
    touchable: {
        // ...StyleSheet.absoluteFill,
        zIndex: 1,
    }
});
