import React from 'react'
import { View, ImageBackground, StyleSheet, Image, Text, Platform } from 'react-native'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={2} style={styles.background} source={require("../assets/bg.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/DGLogo.png")} />
                <Text style={{
                    color: "#fff",
                    fontSize: 25,
                    fontWeight: "bold"
                }}> Sell Your Installation systems!</Text>
                <Text style={{
                    color: Platform.OS === 'android' ? '#FFD966' : '#fff',
                    fontSize: 30,
                    fontWeight: "bold"
                }}>Dev Gram</Text>
            </View>
            <View style={{ width: "100%", padding: 20, gap: 20, marginBottom: 35 }}>
                <AppButton title='Login' />
                <AppButton title='Register' color={'#8CC0DE'} />

            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    logo: {
        height: 120,
        width: 120,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 40
    }
})