import axios from "axios";
import { API } from "../../config";
export default function getQuestionList() {
  return axios.get(API.getAPITest("test"));
}
