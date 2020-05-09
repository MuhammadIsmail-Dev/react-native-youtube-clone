import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
// components
import Header from "../components/Home/Header";
import Card from "../components/Home/Cards";
// redux
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
	main: {
		height: '100%'
  }
});

export default function Home() {
	const cardData = useSelector((state:any) => {
		return state
	})
	return (
		<View style={styles.main}>
			<Header />
			<FlatList
				data={cardData}
				renderItem={ ({item}) => (
					<Card
						videoId={item.id.videoId}
						title={item.snippet.title}
						channel={item.snippet.channelTitle}
					/>
				)}
				keyExtractor={ item => item.id.videoId}
				style={{marginBottom: 10}}
			/>
		</View>
	);
}
