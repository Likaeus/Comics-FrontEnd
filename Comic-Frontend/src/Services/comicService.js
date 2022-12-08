import axios from "axios";

const ApiUrl = "http://localhost:8000/comics";

const ComicList = () => {
  return axios.get(`${ApiUrl}`);
};

const out = {
  GetComics: ComicList,
};

export default out;
