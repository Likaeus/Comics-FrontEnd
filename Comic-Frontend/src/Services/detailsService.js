import axios from "axios";

const ApiUrl = "http://localhost:8000/comic/";

const comic = () => {
  return axios.get(`${ApiUrl}`);
};

const out = {
  GetComic: comic,
};

export default out;
