import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  cardHolder: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  coverimage: {
    width: "100%",
    height: 90,
  },
  cardDescHolder: {
    flex:3,
    marginLeft: 10
  },
  cardDescTagline: {
    fontSize: 16,
    fontWeight: "600",
    width: Dimensions.get("screen").width - 190,
  },
  cardDescExtraText: {
    color: "#00000090",
  },
});

export default function Card(props:any) {
  return (
    <View style={styles.cardHolder}>
      <View style={{flex:3}}>
        <Image
          style={styles.coverimage}
          source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        />

      </View>
      <View style={styles.cardDescHolder}>
            <Text
              style={styles.cardDescTagline}
              ellipsizeMode={"tail"}
              numberOfLines={3}
            >
              {props.title}
            </Text>
            <Text style={styles.cardDescExtraText}>{props.channel}</Text>
      </View>
    </View>
  );
}
