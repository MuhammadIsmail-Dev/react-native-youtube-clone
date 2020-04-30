import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Constant from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  rowHorizontalCenter: {
    alignItems: "center",
  },
  header: {
    marginTop: Constant.statusBarHeight,
    backgroundColor: "#fff",
    elevation: 4,
    flexDirection: "row",
    padding: 10,
  },
  searchInput: { 
    flex: 1, 
    backgroundColor: '#00000020',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 35,
    padding: 10
  },
  searchBoxHolder: {
    flex: 1,
    flexDirection: "row",
  },
  otherIconsHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{ ...styles.searchBoxHolder, ...styles.rowHorizontalCenter }}>
        <MaterialIcons name="arrow-back" size={28} color="#00000070" />
        <TextInput
          style={styles.searchInput}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          />
      </View>
      <View
        style={{ ...styles.otherIconsHolder, ...styles.rowHorizontalCenter }}
      >
        <MaterialIcons name="send" size={28} color="#00000070" />
      </View>
    </View>
  );
}
