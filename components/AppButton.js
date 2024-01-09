import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function AppButton({ title, color }) {
    return (
        <TouchableOpacity style={[styles.AppBtn, { backgroundColor: color || "#F875AA" }]}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: 'white' }}>{title}</Text>
        </TouchableOpacity>
    );
}


export default AppButton;

const styles = StyleSheet.create({
    AppBtn: {
        backgroundColor: "#F875AA",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    }
});