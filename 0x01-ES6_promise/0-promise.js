#!/usr/bin/node
//Return a Promise from the function

export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		const response = true;
		resolve(response);
	});
};
