import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 0.5,
        borderColor: "#000",
        marginRight: 10,
    },
    title: {
        fontWeight: "600"
    },
    subTitle: {
        color: "#6e6969"
    }
})