import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import CommitLabel from "./CommitLabel";
import { getCommitHeaders } from "../../utils";

const CommitCard = ({ message, author, date }) => {
	const [label, commitMessage] = getCommitHeaders(message);
	const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");

	return (
		<View style={styles.container}>
			<View>
				<CommitLabel label={label} />
				<Text style={styles.commitMessage}>{commitMessage}</Text>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.commitDetail}>{author}</Text>
				<Text style={styles.commitDetail}>{formattedDate}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 13,
		marginBottom: 30,
		backgroundColor: "#334254",
		borderRadius: 8
	},
	commitMessage: {
		paddingTop: 5,
		fontSize: 18,
		color: "#F4F4F5"
	},
	commitDetail: {
		fontWeight: "bold",
		color: "#F4F4F5"
	},
	detailsContainer: {
		marginTop: 18,
		alignItems: "flex-end"
	}
});

export default CommitCard;
