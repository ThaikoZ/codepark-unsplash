import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "3FcbVLPskJNvQAzBnH-QZKfXiHzw2xAZ0k_z3X4KhpM",
  },
});
