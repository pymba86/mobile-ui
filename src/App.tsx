import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeTab from "./navigations";

interface AppProps {
}

interface AppState {
    isLoadingComplete: boolean;
}

class App extends React.PureComponent<AppProps, AppState> {

    public state: AppState = {
        isLoadingComplete: false
    };

    public render() {
        return (
            <HomeTab/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default App;
