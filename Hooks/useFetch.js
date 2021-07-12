import { useState } from "react";

const useFetch = (url, method) => {
	const [isFetching, setFetchingState] = useState(false);

	async function makeFetchRequest(body, successCb, errorCb) {
		setFetchingState(true);

		try {
			const fetchOptions = {
				body: body && JSON.stringify(body),
				method,
				headers: {
					"Content-Type": "application/json"
				}
			};
			const fetchResult = await fetch(url, fetchOptions);

			await handleResponse(fetchResult, successCb, errorCb);
		} catch (e) {
			setFetchingState(false);
			errorCb({ message: "Connection Error" }, 502);
		}
	}

	async function handleResponse(fetchResult, successCb, errorCb) {
		const data = await fetchResult.json();
		const { status: statusCode } = fetchResult;

		setFetchingState(false);
		if (fetchResult.status >= 300) {
			errorCb(data, statusCode);
		} else {
			successCb(data, statusCode);
		}
	}

	return [isFetching, makeFetchRequest];
};

export default useFetch;
