#!/usr/bin/node

export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			const response = {
				status : 200,
				body : 'Success'
			}
			resolve(response);
		} else {
			const error = new Error('The fake API isnt working directly');
			reject(error);
		}
	});
}
