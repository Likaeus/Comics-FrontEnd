import "../Styles/comic-list-grid.css";
import { useNavigate } from "react-router-dom";

const ComicListGrid = ({ comics, toggleView }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="banner">MY COMIC WEBPAGE</h1>
        <button onClick={toggleView} className="button">
          Switch
        </button>
      </div>
      <div className="cards-container">
        {comics.map((c) => (
          <div className="icons" key={c.id}>
            <img
              onClick={() => {
                navigate("/comicDetails/" + c.id);
              }}
              src={c.image.original_url}
            />
            <h2 className="components">{c.name ? c.name : c.volume.name} </h2>
            <h2>{c.issue_number}</h2>
            <p>{c.date_added}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicListGrid;
