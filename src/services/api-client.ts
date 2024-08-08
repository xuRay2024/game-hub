import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "33de9efafdea4a34b154fbc9f989ad05",
  },
});
