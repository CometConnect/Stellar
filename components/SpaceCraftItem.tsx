import React, { FC } from "react"
import {
    Text,
    Image,
    View,
    StyleSheet
} from "react-native"
import { Result } from "../api"

interface Props {
    item: Result
}

export const SpaceCraftsItem: FC<Props> = ({ item: { agency: { image_url, description }, name } }): JSX.Element => {
    const { contentCard, itemImage } = styles
    return (
        <View style={contentCard}>
            <Image source={{ uri: image_url }} style={itemImage}></Image>
            <View style={{ padding: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>{name}</Text>
                    <Text style={{ color: '#696969', fontSize: 16 }}>{name}</Text> 
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#A9A9A9', fontSize: 13 }}>{description}</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentCard: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        elevation: 10,
        backgroundColor: 'white'
    },
    itemImage: {
        width: "100%",
        height: 200,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    }
})