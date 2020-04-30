import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
// components
import Header from "../components/Search/Header";
import Card from "../components/Search/Cards";

const styles = StyleSheet.create({
	main: {
		height: '100%'
  }
});

export default function Search() {
	return (
		<View style={styles.main}>
			<Header />
			<ScrollView>
				<Card />
				<Card />
				<Card />
				<Card />
			</ScrollView>
		</View>
	);
}
