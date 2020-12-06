const baseurl = "http://localhost:4000";

export default (url, options) => fetch(baseurl + url, options);
