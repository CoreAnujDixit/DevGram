import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container} >
            <View style={styles.closeIcon}><MaterialCommunityIcons name='close' color='black' size={30} /></View>
            <View style={styles.deleteIcon}><MaterialCommunityIcons name='trash-can-outline' color='black' size={30} /></View>

            <Image style={styles.image} resizeMode='contain' source={require("../assets/view.jpg")} />

        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 50,
        left: 30,
    },
    container: {
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 50,
        right: 30,
    },
    image: {
        width: "100%",
        height: 800,
    }

});