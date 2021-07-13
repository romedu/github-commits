import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Alert } from "react-native";
import CommitCard from "../Components/Commits/CommitCard";
import Loader from "../Components/UI/Loader";
import TextHeader from "../Components/UI/TextHeader";
import { BASE_API_URL } from "../constants";
import useFetch from "../Hooks/useFetch";

const CommitsScreen = () => {
	const [pageNum, setPageNum] = useState(1);
	const [isRefreshing, setRefreshingState] = useState(true);
	const [commits, setCommits] = useState([]);
	const [isLoading, fetchCommits] = useFetch(`${BASE_API_URL}/commits?page=${pageNum}`, "GET");
	const clearCommits = () => {
		setRefreshingState(true);
		setCommits([]);
		setPageNum(1);
	};

	useEffect(() => {
		if (isRefreshing || pageNum > 1) {
			const handleSuccessfulFetch = fetchResult => {
				setCommits([...commits, ...fetchResult.commits]);
				setRefreshingState(false);
			};
			const handleFailedFetch = error => {
				const errorMessage = `${error.message}. Pressing "OK" will trigger another call`;

				setRefreshingState(false);
				Alert.alert("Error", errorMessage, clearCommits);
			};

			fetchCommits(null, handleSuccessfulFetch, handleFailedFetch);
		}
	}, [isRefreshing, pageNum]);

	return (
		<SafeAreaView style={styles.container}>
			<TextHeader> My Commits </TextHeader>
			{isRefreshing && <Loader />}
			<FlatList
				data={commits}
				keyExtractor={commit => commit.id}
				refreshing={isRefreshing}
				onRefresh={clearCommits}
				onEndReachedThreshold={0.5}
				onEndReached={() => setPageNum(pageNum + 1)}
				renderItem={({ item: commit }) => (
					<CommitCard message={commit.message} author={commit.authorName} date={commit.date} />
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 60,
		marginHorizontal: 25
	}
});

export default CommitsScreen;
