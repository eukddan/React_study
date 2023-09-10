import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "전주 비빕밥 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "orange", fontSize: "16px" }}>BLOG</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
