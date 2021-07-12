import React from "react";
import { Text, StyleSheet } from "react-native";

const CommitLabel = ({ label }) => {
	const currentStyles = { ...styles.label, ...styles[label] };
	return <Text style={currentStyles}>{label.toUpperCase()}</Text>;
};

const styles = StyleSheet.create({
	label: {
		fontSize: 23,
		fontWeight: "bold"
	},
	feat: {
		color: "#0992B1"
	},
	fix: {
		color: "#ED596D"
	},
	chore: {
		color: "#5046E4"
	},
	style: {
		color: "#DB2777"
	},
	refactor: {
		color: "#109488"
	}
});

export default CommitLabel;
