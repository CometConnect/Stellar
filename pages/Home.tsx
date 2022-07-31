import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native"
import Button from "../components/Button"
import { Props, State } from "../types"

const space_crafts = require("../assets/space_crafts.png")
const star_map = require("../assets/star_map.png")
const daily_pic = require("../assets/daily_pictures.png")
export default class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require("../assets/stars.gif")}
            style={styles.backgroundImage}
          >
            <View style={styles.titleBar}>
              <Image
                source={require("../assets/main-icon.png")}
                style={styles.image}
              />
              <Text style={styles.titleText}>Stellar</Text>
              <Text style={styles.titleText}>App</Text>
            </View>
            <Button
                navScreen="SpaceCraft"
                text="SpaceCrafts"
                image={space_crafts}
                navigation={this.props.navigation}
            />
            <Button
                navScreen="StarMap"
                text="Star Map"
                image={star_map}
                navigation={this.props.navigation}
            />
            <Button
                navScreen="DailyPic"
                text="Daily Pictures"
                image={daily_pic}
                navigation={this.props.navigation}
            />
          </ImageBackground>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
})