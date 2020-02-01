import axios from "axios";

export default axios.create({
  baseURL: "https://developer.riotgames.com",
  headers: {
    Authorization:
      "Client-ID 1d9c11b8475c27152e3dd9d7fce53462c88d3487a373a1c2cadae681e8312b97"
  }
});
