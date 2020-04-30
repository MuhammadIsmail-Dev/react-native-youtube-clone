import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
// components
import Header from "../components/Home/Header";
import Card from "../components/Home/Cards";

const styles = StyleSheet.create({
	main: {
		height: '100%'
  }
});

export default function Home() {
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
