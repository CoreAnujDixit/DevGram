import React from 'react';
import { View, StyleSheet, Image, Text, Platform, StatusBar } from 'react-native'

function Card({ title, image, subTitle }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.txtContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ color: "#52D3D8", fontWeight: "bold", fontSize: 18 }}>{subTitle}</Text>

            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: "#dadada",

    },
    image: {
        width: "90%",
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    txtContainer: {
        padding: 8,
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#fff"
    },
    title: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 17
    }
});
