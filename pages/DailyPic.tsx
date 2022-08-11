import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    StatusBar,
    SafeAreaView,
    Linking,
    ScrollView
} from 'react-native'

import axios from 'axios'
import { Props } from '../types'
import { API } from '../api'

const gif = require('../assets/stars.gif')

interface State {
    apod: API
}

export default class DailyPicScreen extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            apod: { copyright: "", date: "", explanation: "", hdurl: "", media_type: "", service_version: "", title: "", url: "" }
        }
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw")
            .then((response) => {
                this.setState({ apod: response.data })
            })
            .catch((error) => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.apod).length === 0) {
            const { loading } = styles
            return (
                <View style={loading}>
                    <Text>Loading</Text>
                </View>
            )
        }
        const { container, droidSafeArea, backgroundImage, listContainer, titleText, explanationText, title: titleStyle, routeText, image, post } = styles
        const { apod: { url, title, explanation } } = this.state
        return (
            <View style={container}>
                <SafeAreaView style={droidSafeArea} />
                <ImageBackground
                    source={gif}
                    style={backgroundImage}
                >
                    <View style={titleStyle}>
                        <Text style={routeText}>Daily Pic</Text>
                    </View>
                    <ScrollView style={listContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL(url).catch(err => console.error("Couldn't load page", err))}>
                            <Image source={{ "uri": url }} style={image} />
                        </TouchableOpacity >
                        <View style={post}>
                            <Text style={titleText}>{title}</Text>
                            <Text style={explanationText}>{explanation}</Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10
    },
    title: {
        flex: 0.15,
        justifyContent: "center",
        textAlign: "center"
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10
    },
    post: {
        padding: 20
    }
});