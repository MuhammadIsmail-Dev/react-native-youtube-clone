import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
// components
import Header from '../components/Header';
import Card from '../components/Cards';

const styles = StyleSheet.create({

});

export default function Home(){
    return (
        <View>
            <Header/>
            <ScrollView>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    )
};