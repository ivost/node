"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
node_fetch_1.default("https://www.google.com")
    .then((res) => {
    console.log(res.ok);
    console.log(res.status);
    console.log(res.statusText);
    // console.log(res.headers);
    console.log(res.headers.get("content-type"));
})
    .catch((err) => {
    console.error(err);
});
node_fetch_1.default("https://api.github.com/users/github")
    .then((res) => {
    return res.json();
}).then((json) => {
    console.log(json);
});
node_fetch_1.default("http://httpbin.org/post", { method: "POST", body: "foo=bar" })
    .then((res) => {
    return res.json();
}).then((json) => {
    console.log(json);
})
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=app.js.map