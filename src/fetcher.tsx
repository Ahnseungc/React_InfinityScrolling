import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => {
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data.data);
};

export default fetcher;
