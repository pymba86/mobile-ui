import React from 'react'
import {createAppContainer, getActiveChildNavigationOptions} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Platform, StyleSheet, View, Text} from "react-native";
import TabBarBottom from "../components/common/navigation-tabs/TabBarBottom";
import {createStackNavigator} from "react-navigation-stack";
import config from "./stacks/config";
import MenuSettings from "../screens/menu/settings";

const TarBarComponent = (props: any) => {
    return (
        <View style={styles.tarBarView}>
            <TabBarBottom {...props} style={styles.tabBarComponent}/>
        </View>
    )
};

const S = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bbbbbb",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {fontSize: 28, color: "#222222", textAlign: "center"}
});


class ScreenTemplate extends React.Component<{ name: string; color: string }> {
    render() {
        return (
            <View style={[S.container, {backgroundColor: this.props.color}]}>
                <Text style={S.text}>This is the "{this.props.name}" screen</Text>
            </View>
        );
    }
}

export const ScreenA = () => <ScreenTemplate name="A" color="#fff"/>;
export const ScreenB = () => <ScreenTemplate name="B" color="#fff"/>;
export const ScreenC = () => <ScreenTemplate name="C" color="#fff"/>;
export const ScreenD = () => <ScreenTemplate name="D" color="#fff"/>;

const HomeTab = createBottomTabNavigator(
    {
        Home: {
            screen: ScreenA,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="calendar" size={22} color={tintColor}/>
            }
        },
        Settings: {
            screen: ScreenB,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="message-square" size={22} color={tintColor}/>
            }
        },
        Profile: {
            screen: ScreenC,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="bell" size={22} color={tintColor}/>
            }
        },
        Menu: {
            screen: MenuSettings,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="menu" size={22} color={tintColor}/>
            }
        }
    },
    {
        tabBarComponent: props => <TarBarComponent {...props} />,
        navigationOptions: ({navigation, screenProps}) =>
            getActiveChildNavigationOptions(navigation, screenProps)
    }
    )
;

const HomeStack = createStackNavigator({
    Home: {screen: HomeTab, navigationOptions: {
        title: 'Tab'
        } }
}, {
    headerMode: "screen",
    navigationOptions: {
        headerBackTitleVisible: false,
        headerTransitionPreset: 'uikit',
        headerLayoutPreset: 'center',
    },
    ...config
});

export default createAppContainer(HomeStack);

const styles = StyleSheet.create({
    tarBarView: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#cff"
    },
    tabBarComponent: Platform.OS === 'ios'
        ? {
            borderTopWidth: 0,
            backgroundColor: 'transparent'
        }
        : {
            backgroundColor: "#d3c",
            borderTopWidth: 12,
            borderTopColor: "#ccc"
        }
});
