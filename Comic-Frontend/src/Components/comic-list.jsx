import { useState, useEffect } from "react";
import out from "../Services/comicService";

const ComicList = () => {
  const response = out.GetComics();
  console.log(response);

  const [comics, setComics] = useState([]);

  useEffect(() => {
    out.GetComics().then((response) => {
      console.log(response.data.results);
      setComics(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      {comics.map((c) => (
        <div key={c.id}>
          <img src={c.image.original_url} />
          <h2>{c.name} </h2>
          <h2>{c.issue_number}</h2>
          <p>{c.date_added}</p>
        </div>
      ))}
    </div>
  );
};

export default ComicList;
