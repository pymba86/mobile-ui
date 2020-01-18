import React from 'react'
import {ScrollView, StyleSheet, Text} from 'react-native'
import {colorDanger, container, mt} from "../../../styles";
import ItemSetting from "./item";

export default class MenuSettings extends React.Component<{}> {

    render() {
        return (
            <ScrollView style={container.screen} contentContainerStyle={container.bottom}>
                <ItemSetting
                    border
                    hd='Organization'
                    ft='Google'
                />

                <Text style={[container.wind, mt.md]}>Group</Text>
                <ItemSetting

                    style={mt.sm}

                    hd='Name'
                    ft='Digital Ocean'
                />
                <ItemSetting
                    border
                    hd='Size'
                    ft='12mb'
                />

                <Text style={[container.wind, mt.md]}>User</Text>
                <ItemSetting

                    style={mt.sm}

                    hd='Remove user'
                    ft='On'
                />
                <ItemSetting
                    border
                    hd='Refresh container'
                    ft='Always'
                />

                <Text style={[container.wind, mt.md]}>Groups</Text>
                <ItemSetting

                    style={mt.sm}

                    hd='Display'
                    ft='On'
                />
                <ItemSetting
                    border
                    hd='Leave group'
                    ft='1151'
                />
                <ItemSetting
                    border
                    hd='Container'
                    ft='Always'
                />


                <Text style={[container.wind, mt.md]}>Settings</Text>
                <ItemSetting

                    style={mt.sm}

                    hd='Remove block'
                    ft='On'
                />
                <ItemSetting
                    border
                    hd='Refresh container'
                    ft='Always'
                />

                <Text style={[container.wind, mt.md]}>Profile</Text>
                <ItemSetting

                    style={mt.sm}

                    hd={
                        <Text style={styles.danger}>Выйти</Text>
                    }
                    arrow={true}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    danger: {
        color: colorDanger
    }
});


