import "./Dictionary.css";
import WordSearch from "./WordSearch";

function Dictionary() {
  return (
    <div className="Dictionary">
      <div className="container">
        <h1>Dictionary</h1>
        <br />
        <WordSearch defaultWord="hello" />
        <br />
        <footer>
          <a
            href="https://github.com/MajaHeartland/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source
          </a>{" "}
          by Maja Heartland
        </footer>
      </div>
    </div>
  );
}

export default Dictionary;
