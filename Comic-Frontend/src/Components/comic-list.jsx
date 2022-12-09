import { useState, useEffect } from "react";
import out from "../Services/comicService";
import ComicListGrid from "./comic-list-grid";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/comic-list.css";

const ComicList = () => {
  const response = out.GetComics();
  const navigate = useNavigate();

  const [comics, setComics] = useState([]);
  const [viewMode, setViewMode] = useState(true);

  const handleSwitch = () => {
    setViewMode(!viewMode);
  };

  useEffect(() => {
    out.GetComics().then((response) => {
      console.log(response.data.results);
      setComics(response.data.results);
    });
  }, []);

  if (viewMode) {
    return (
      <div>
        <div>
          <h1 className="banner">MY COMIC WEBPAGE</h1>
          <button className="button-style" onClick={handleSwitch}>
            Switch
          </button>
        </div>

        <div className="space">
          {comics.map((c) => (
            <div key={c.id}>
              <img
                onClick={() => {
                  navigate("/comicDetails/" + c.id);
                }}
                src={c.image.original_url}
              />
              <h2>{c.name ? c.name : c.volume.name} </h2>
              <h2>{c.issue_number}</h2>
              <p>{c.date_added}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <ComicListGrid comics={comics} toggleView={handleSwitch} />;
};

export default ComicList;
