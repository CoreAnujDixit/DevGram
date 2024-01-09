import React from 'react';

import { View, Image, StyleSheet, Text, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem';

function ListingScreenDetails() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/pc.jpg")} />
            <View style={styles.txtContainer}>
                <Text style={styles.title}>32GB RAM Computer with RGB Monitor</Text>
                <Text style={styles.sub}>$100</Text>
                <ListItem
                    image={require("../assets/bheem.png")}
                    title="Bheem Gujjar"
                    subTitle="5 Listings"

                />
            </View>
        </View>
    );
}

export default ListingScreenDetails;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    image: {
        width: "100%",
        height: 250,
    },
    txtContainer: {
        padding: 10,
    },
    title: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 17
    },
    sub: {
        color: "#52D3D8",
        fontWeight: "bold",
        fontSize: 18
    }
});