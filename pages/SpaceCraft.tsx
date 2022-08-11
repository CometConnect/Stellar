import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native'
import axios from 'axios'
import { Props } from '../types'
import { SpaceCraft, Result } from '../api'
import { SpaceCraftsItem } from '../components/SpaceCraftItem'

const gif = require('../assets/stars.gif')

interface State {
    aircrafts: Result[]
}
export default class SpaceCraftsScreen extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            aircrafts: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then((response) => {
                const { results } = response.data as SpaceCraft
                this.setState({ aircrafts: results })
            })
            .catch(error => {
                console.table(error)
            })
    }

    render() {
        if (Object.keys(this.state.aircrafts).length === 0) {
            const { loading } = styles
            return (
                <View style={loading}>
                    <Text>Loading</Text>
                </View>
            )
        }
        const { aircrafts } = this.state
        const { container, droidSafeArea, backgroundImage, titleText, titleContainer, listContainer } = styles
        return (
            <View style={container}>
                <SafeAreaView style={droidSafeArea} />
                <ImageBackground source={gif} style={backgroundImage}>
                    <View style={titleContainer}>
                        <Text style={titleText}>Spacecrafts</Text>
                    </View>
                    <View style={listContainer}>
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={aircrafts}
                            renderItem={SpaceCraftsItem}
                            initialNumToRender={10}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {
        flex: 0.85
    }
})