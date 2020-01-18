import React from 'react'
import {Alert, View, Text, StyleSheet} from 'react-native'
import {Flex} from "@ant-design/react-native";
import Touchable from "../../../components/touchable";
import Icon from "react-native-vector-icons/Feather";
import {colorBorder, colorPlain, hairlineWidth, ml, sm, wind} from "../../../styles";

function ItemSetting({
                         style,
                         border,
                         hd,
                         ft,
                         arrow,
                         information,
                         onPress,
                         ...other
                     }: any) {

    const content = (
        <Flex style={[styles.item, border && styles.border]}>
            <Flex.Item>
                <Flex>
                    <Text>{hd}</Text>
                </Flex>
            </Flex.Item>
            {typeof ft === 'string' ? (
                <Text>
                    {ft}
                </Text>
            ) : (
                ft
            )}
            {arrow && <Icon style={ml.xs}  name='chevron-right' size={16} />}
        </Flex>
    );

    if (onPress) {
        return (
            <Touchable style={[styles.touchable, style]} onPress={onPress} {...other}>
                {content}
            </Touchable>
        )
    }

    return (
        <View style={[styles.touchable, style]} {...other}>
            {content}
        </View>
    )
}

export default ItemSetting;

const styles = StyleSheet.create({
    touchable: {
        paddingLeft: wind,
        backgroundColor: colorPlain
    },
    item: {
        height: 56,
        paddingRight: wind
    },
    border: {
        borderTopWidth: hairlineWidth,
        borderTopColor: colorBorder
    }
});
