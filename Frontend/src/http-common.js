import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.43.101:8080/vetements/api",
  headers: {
    "Content-type": "application/json"
  }
});