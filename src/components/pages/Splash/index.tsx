import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './../../../assets/img/logo.svg';


export function Splash() {

    return (
        <LinearGradient colors={['#fff', '#00EB8453']} style={styles.linearGradient}>
            <Logo />
        </LinearGradient>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});