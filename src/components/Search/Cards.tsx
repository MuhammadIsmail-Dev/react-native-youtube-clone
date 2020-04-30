import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  cardHolder: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row'
  },
  coverimage: {
    width: "100%",
    height: 80,
  },
  cardDescHolder: {
    flex:3,
    marginLeft: 10
  },
  cardDescTagline: {
    fontSize: 16,
    fontWeight: "600",
    width: Dimensions.get("screen").width - 160,
  },
  cardDescExtraText: {
    color: "#00000090",
  },
});

export default function Card() {
  return (
    <View style={styles.cardHolder}>
      <View style={{flex:2}}>
        <Image
          style={styles.coverimage}
          source={require("../../../assets/demoImages/videoCardBg.jpeg")}
        />

      </View>
      <View style={styles.cardDescHolder}>
            <Text
              style={styles.cardDescTagline}
              ellipsizeMode={"tail"}
              numberOfLines={3}
            >
              Video Tagline dummy textVideo Tagline dummy textVideo Tagline
              dummy textVideo Tagline dummy textVideo Tagline dummy text
            </Text>
            <Text style={styles.cardDescExtraText}>another text</Text>
      </View>
    </View>
  );
}
