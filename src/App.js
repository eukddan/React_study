/* eslint-disable */ //warning 메시지 제거
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState(["아우터 추천", "코트 추천", "반팔 추천"]);
  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "orange", fontSize: "16px" }}>BLOG</h4>
      </div>
      <button
        onClick={() => {
          let copy1 = [...글제목];
          copy1.sort();
          제목변경(copy1);
        }}
      >
        정렬
      </button>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  const copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>9월 13일 발행</p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          color="skyblue"
          title={title}
          글제목={글제목}
          제목변경={제목변경}
        />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자 아우터 추천";
          props.제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

// 컴포넌트: function만들기 -> return 내부 작성 -> <함수명></함수명>으로 사용
// 반복적인 html 축약, 큰 페이지들, 자주 변경되는 것들
// 컴포넌트 단점: state 가져다쓸 때 문제가 생기게 됨

export default App;
