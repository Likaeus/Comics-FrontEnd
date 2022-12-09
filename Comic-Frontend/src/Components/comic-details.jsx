import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import out from "../Services/comicService";

const ComicDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [comic, setComic] = useState({});
  useEffect(() => {
    out.GetComic(params.id).then((response) => {
      console.log(response);
      setComic(response.data.results);
    });
  }, []);

  console.log(comic);
  return (
    <div>
      <img src={comic?.image?.original_url} />
      <div>
        {comic.character_credits?.map((cc) => (
          <div key={cc.id}>
            <h1>{cc.name}</h1>
          </div>
        ))}
      </div>

      <div>
        {comic.team_creadits?.map((tc) => (
          <div key={tc.id}>
            <h2>{tc.name}</h2>
          </div>
        ))}
      </div>
      <div>
        {comic.location_credits?.map((lc) => (
          <div key={lc.id}>
            <h3>{lc.name}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back!
      </button>
    </div>
  );
};

export default ComicDetails;
