import React, { Component } from "react"
import { Props } from "../types"
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageSourcePropType
} from "react-native"

interface ButtonProps extends Props {
    navScreen: string
    text: string
    image: ImageSourcePropType
}

export default class Button extends Component<ButtonProps>{
    constructor(props: ButtonProps) { super(props) }
    render() {
        return (
            <TouchableOpacity
                style={styles.routeCard}
                onPress={() => this.props.navigation.navigate(this.props.navScreen)}
            >
                <Text style={styles.routeText}>{this.props.text}</Text>
                <Image source={this.props.image} style={styles.routeImage} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white",
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#D11583",
        justifyContent: "center",
        alignItems: "center",
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain",
    },
})