import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { Props } from '../types'

interface State {
    longitude: string
    latitude: string
}

export default class StarMapScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            longitude: '',
            latitude: ''
        }

    }
    render() {
        const { container, inputCollector, droidSafeArea, inputStyle, titleText, map } = styles
        const { longitude, latitude } = this.state
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={container}>
                <SafeAreaView style={droidSafeArea} />
                <View style={inputCollector}>
                <Text style={titleText}>Star Map</Text>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => this.setState({ longitude: text })}
                    />

                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => this.setState({ latitude: text })}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={map}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a0023"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    inputCollector: {
        flex: 0.3,
        marginTop: 20,
        alignItems: "center"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center"
    },
    inputStyle: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: "center",
        color: "white",
        width: 200
    },
    map: {
        marginTop: 20,
        marginBottom: 20
    }
})