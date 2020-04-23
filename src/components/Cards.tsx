import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
    cardHolder: {
        borderTopColor: '#00000050',
        borderTopWidth: 1,
        marginBottom: 10
    },
    coverimage: {
        width: '100%',
        height: 200
    },
    cardDescHolder: {
        padding: 10,
    },
    cardTagline: {
        flexDirection: 'row'
    },
    cardDescTagline: {
        fontSize: 16,
        fontWeight: '600',
        width: Dimensions.get('screen').width - 80
    },
    cardDescExtraText: {
        color: '#00000090'
    }
});

export default function Card(){
    return(
        <View style={styles.cardHolder}>
            <Image
                style={styles.coverimage}
                source={require('../../assets/demoImages/videoCardBg.jpeg')}
            />
            <View style={styles.cardDescHolder}>
                <View style={styles.cardTagline}>
                    <MaterialIcons
                    name="account-circle" 
                    size={28} 
                    color="#00000070"
                    style={{marginRight: 10}}
                    />
                    <View>
                        <Text
                            style={styles.cardDescTagline}
                            ellipsizeMode={"tail"}
                            numberOfLines={2}
                            >Video Tagline dummy textVideo Tagline dummy textVideo Tagline dummy textVideo Tagline dummy textVideo Tagline dummy text</Text>
                        <Text style={styles.cardDescExtraText}>another text</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}