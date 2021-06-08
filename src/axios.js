// axios
import axios from "axios";

var domain = "https://wro-v.com/backend/api";

export default axios.create({
  baseURL: domain
  // You can add your headers here
  // headers: {
  //   Authorization: localStorage.getItem("AccessToken")
  // }
});
