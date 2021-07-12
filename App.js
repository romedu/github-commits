import React from "react";
import { StyleSheet, View } from "react-native";
import CommitsScreen from "./Screens/CommitsScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<CommitsScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#10182A"
	}
});
