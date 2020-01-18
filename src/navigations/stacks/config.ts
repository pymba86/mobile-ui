import {Platform, StyleSheet} from 'react-native'
import {colorBorder, colorTitle, wind} from "../../styles";

const config = {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: colorBorder,
            elevation: 0,
        },
        headerTintColor: colorTitle,
        headerLeftContainerStyle: Platform.select({
            ios: {
                paddingLeft: 8
            }
        }),
        headerTitleStyle: Platform.select({
            android: {
                marginLeft: -4
            }
        }),
        headerRightContainerStyle: {
            paddingRight: wind
        },
        headerTitleAllowFontScaling: false,
        headerBackAllowFontScaling: false,
        transparentCard: true
    }
};
export default config
