import axios from "axios";
import { API } from "../../config";
export default function getUser() {
  return axios.get(API.getAPI(""));
}
