import fetch from "node-fetch";

fetch("https://www.google.com")
	.then( (res) => {
		console.log(res.ok);
		console.log(res.status);
		console.log(res.statusText);
		// console.log(res.headers);
		console.log(res.headers.get("content-type"));
	})
	.catch ( (err) => {
		console.error(err);
	})

fetch("https://api.github.com/users/github")
	.then( (res) => {
		return res.json();
	}).then( (json) => {
		console.log(json);
	});


fetch("http://httpbin.org/post", {method: "POST", body: "foo=bar"})
	.then( (res) => {
		return res.json();
	}).then( (json) => {
		console.log(json);
	})
	.catch ( (err) => {
		console.error(err);
	})
