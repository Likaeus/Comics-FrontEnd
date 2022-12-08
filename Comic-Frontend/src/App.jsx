import "./App.css";
import out from "./Services/comicService";

function App() {
  console.log(import.meta.env);
  const response = out.GetComics();
  console.log(response);

  return <div className="App"></div>;
}

export default App;
