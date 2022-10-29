import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">DICTIONARY APP</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">Coded by VicVeronique</footer>
      </div>
    </div>
  );
}
