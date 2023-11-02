import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.WORDPRESS_API_URL + "/wp-json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
