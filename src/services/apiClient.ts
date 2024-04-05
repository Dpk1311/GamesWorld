import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "100badcef9c043029aef51ab8710323e",
  },
});
