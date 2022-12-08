import axios from "axios";

const ApiUrl = "https://comicvine.gamespot.com/api";

const ComicList = () => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/${ApiUrl}/issues/?api_key=${
      import.meta.env.VITE_API_TOKEN
    }&limit=20&format=json`
  );
};

const out = {
  GetComics: ComicList,
};

export default out;
