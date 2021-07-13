import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => <ActivityIndicator style={styles.loader} size="large" color="#fff" />;

const styles = StyleSheet.create({
	loader: {
		paddingTop: "50%"
	}
});

export default Loader;
