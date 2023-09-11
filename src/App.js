/* eslint-disable */ //warning 메시지 제거
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

// 리액트에서는 자료를 잠깐 저장할 때 변수 이외에 state를 사용해도 됨
// let[작명,작명], useState(보관할 자료)
// b는 state 변경을 도와주는 함수
// state 왜 사용? => state쓰던 html은 자동 재렌더링이 됨
// state 언제 사용? => 변동시 자동으로 html에 반영되게 만들고싶을 때

function App() {
  let post = "전주 비빕밥 맛집"; // 변수 생성할 때 let, var, const 중 하나 사용하면 됨
  let [글제목, b] = useState("남자 아우터 추천");
  return (
    //return() 안에 html 짜야 함.
    //return() 안에는 병럴로 태그 2개 이상 기입 금지
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "orange", fontSize: "16px" }}>BLOG</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>롱코트</p>
      </div>
    </div>
  );
}

export default App;
