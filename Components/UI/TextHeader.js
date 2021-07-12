import React from "react";
import { Text, StyleSheet } from "react-native";

const TextHeader = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
	header: {
		paddingBottom: 40,
		fontSize: 35,
		fontWeight: "bold",
		color: "#fff"
	}
});

export default TextHeader;
