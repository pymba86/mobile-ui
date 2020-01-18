import React from 'react'
import {
    Animated,
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Platform, SafeAreaView, GestureResponderEvent
} from 'react-native'
import TabBarIcon from "./TabBarIcon";

const majorVersion = parseInt(Platform.Version as string, 10);
const isIos = Platform.OS === 'ios';
const isIOS11 = majorVersion >= 11 && isIos;

type TouchableWithoutFeedbackProps = {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
    style: any;
};

class TouchableWithoutFeedbackWrapper extends React.Component<TouchableWithoutFeedbackProps> {
    render() {
        const {
            onPress,
            onLongPress,
            ...props
        } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={onPress}
                onLongPress={onLongPress}
                hitSlop={{left: 15, right: 15, top: 5, bottom: 5}}
            >
                <View {...props} />
            </TouchableWithoutFeedback>
        )
    }
}

type TabBarBottomProps = {
    onTabPress: ({route: any}: any) => void;
    onTabLongPress: ({route: any}: any) => void;
    navigation: any;
    activeTintColor: any,
    inactiveTintColor: any,
    renderIcon: any,
    showIcon: any,
    showLabel: any
};

class TabBarBottom extends React.Component<TabBarBottomProps> {

    public static defaultProps = {
        activeTintColor: '#007AFF',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#8E8E93',
        inactiveBackgroundColor: 'transparent',
        showLabel: true,
        showIcon: true,
        allowFontScaling: true,
        safeAreaInset: {bottom: 'always', top: 'never'}
    };

    _renderIcon = ({route, focused}: any) => {
        const {
            navigation,
            activeTintColor,
            inactiveTintColor,
            renderIcon,
            showIcon,
            showLabel
        } = this.props;
        if (showIcon === false) {
            return null
        }

        const activeOpacity = focused ? 1 : 0;
        const inactiveOpacity = focused ? 0 : 1;

        /**
         * @modify theme mode
         */
        return (
            <TabBarIcon
                route={route}
                navigation={navigation}
                activeOpacity={activeOpacity}
                inactiveOpacity={inactiveOpacity}
                activeTintColor={'#000'}
                inactiveTintColor={'#bbb'}
                renderIcon={renderIcon}
                style={[
                    styles.iconWithExplicitHeight,
                    styles.iconWithoutLabel
                ]}
            />
        )
    };

    public render() {
        const {
            navigation,
            onTabPress,
            onTabLongPress,
        } = this.props;

        const {routes} = navigation.state;

        const tabBarStyle = [
            styles.tabBar,
            styles.tabBarRegular
        ];

        return (
            <SafeAreaView style={tabBarStyle}>
                {routes.map((route: any, index: any) => {
                    const focused = index === navigation.state.index;
                    const scene = {route, focused};
                    return (
                        <TouchableWithoutFeedbackWrapper
                            key={route.key}
                            onPress={() => onTabPress({route})}
                            onLongPress={() => onTabLongPress({route})}
                            style={styles.tab}
                        >
                            {this._renderIcon(scene)}
                        </TouchableWithoutFeedbackWrapper>
                    )
                })}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .3)',
        flexDirection: 'row'
    },
    tabBarCompact: {
        height: 29
    },
    tabBarRegular: {
        height: 49
    },
    tab: {
        flex: 1,
        alignItems: isIos ? 'center' : 'stretch'
    },
    tabPortrait: {
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    tabLandscape: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    iconWithoutLabel: {
        flex: 1
    },
    iconWithLabel: {
        flex: 1
    },
    iconWithExplicitHeight: {
        height: 29
    },
});

export default TabBarBottom;
