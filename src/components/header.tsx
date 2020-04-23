import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import Constant from 'expo-constants';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
    rowHorizontalCenter: {
        alignItems: 'center'
    },
    header:{
        marginTop: Constant.statusBarHeight,
        backgroundColor: '#fff',
        elevation: 4,
        flexDirection: 'row',
        padding: 10,
    },
    logoHolder: {
        flex: 2,
        flexDirection: 'row',
    },
    logoText: {
        fontSize: 22,
        marginLeft: 10
    },
    otherIconsHolder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={{...styles.logoHolder,...styles.rowHorizontalCenter}}>
                <AntDesign name="youtube" size={28} color="red"/>
                <Text style={styles.logoText}>Youtube</Text>
            </View>
            <View style={{...styles.otherIconsHolder,...styles.rowHorizontalCenter}}>
                <Ionicons name="md-videocam" size={28} color="#00000070"/>
                <Ionicons name="md-search" size={28} color="#00000070"/>
                <MaterialIcons name="account-circle" size={28} color="#00000070"/>
            </View>
        </View>
    )
};