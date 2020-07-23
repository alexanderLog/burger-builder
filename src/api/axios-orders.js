import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-d19b2.firebaseio.com/",
});

export default instance;
