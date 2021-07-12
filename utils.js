export const getCommitHeaders = commitMessage => {
	const headersDivider = ": ";
	const validCommitLabels = ["feat", "fix", "chore", "style", "refactor"];
	let labelHeader = validCommitLabels[0];
	let messageHeader = commitMessage;

	if (commitMessage.includes(headersDivider)) {
		const [label, message] = commitMessage.split(headersDivider);
		messageHeader = message;

		if (validCommitLabels.includes(label)) labelHeader = label;
	}

	return [labelHeader, messageHeader];
};
