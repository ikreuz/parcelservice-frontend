import axios from "axios";

export default async function srvAxios(url) {
  const { data } = await axios.get(url);
  return data;
}
