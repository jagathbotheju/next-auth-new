import axios from "axios";

export default async function getUserPosts() {
  await axios.get("http://localhost:300/api/");
}
