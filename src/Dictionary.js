import "./Dictionary.css";
import WordSearch from "./WordSearch";

function Dictionary() {
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <br />
      <WordSearch />
      <br />
      <footer>
        <a
          href="https://github.com/MajaDit/react-dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source
        </a>{" "}
        by Maja Ditrtova
      </footer>
    </div>
  );
}

export default Dictionary;
