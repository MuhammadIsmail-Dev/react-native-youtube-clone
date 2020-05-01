import React, { useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
// components
import Header from "../components/Search/Header";
import Card from "../components/Search/Cards";

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },
});

const Search:React.FC = () => {
  const [value, setValue] = useState("");
	const [cardData, setCardData] = useState< any >([]);
	const [isLoaing, setIsLoading] = useState(false);
  const fetchData = () => {
		setIsLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAeEvk4D0_Z7abziPtih2ZXqv-YJl0Snms`
    )
      .then((res) => res.json())
			.then((resJson:any) => {
				setIsLoading(false) 
				setCardData(resJson.items) 
			})
			.catch(err => console.log('an error occured while fetching search results'));
	}
	console.log(value);
  return (
    <View style={styles.main}>
      <Header setValue={setValue} value={value} fetchData={fetchData} />
			{ isLoaing ? <ActivityIndicator style={{marginTop: 10}} size="large" color="red" /> : null}
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


export default Search;