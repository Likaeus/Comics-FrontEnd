import axios from "axios";

const ApiUrl = "http://localhost:8000/comics";
const ApiUrl2 = "http://localhost:8000/comic";

const ComicList = () => {
  return axios.get(`${ApiUrl}`);
};
const comic = (id) => {
  return axios.get(`${ApiUrl2}/${id}`);
};
const out = {
  GetComics: ComicList,
  GetComic: comic,
};

export default out;
