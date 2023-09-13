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
  let [글제목, 제목변경] = useState(["아우터 추천", "코트 추천", "반팔 추천"]);
  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  return (
    //return() 안에 html 짜야 함.
    //return() 안에는 병럴로 태그 2개 이상 기입 금지
    //onClick안에는 함수가 와야 함
    //state는 등호로 변경하면 안됨
    //state 변경용 함수를 이용해서 변경해야 html 재렌더링도 잘 됨
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
        /*리액트에서 array/object state를 수정하고 싶으면 
        독립적인 카피본을 만들어서 수정하는 것이 좋음*/
        //let copy = ~~;
      >
        정렬
      </button>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
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
        <Modal color="skyblue" 글제목={글제목} 제목변경={제목변경} />
      ) : null}
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <button
            onClick={() => {
              let copy = [...글제목]; // 카피본
              copy[0] = "여자 아우터 추천";
              제목변경(copy);
            }}
          >
            변경
          </button>
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>가죽 자켓</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>롱코트</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>치노팬츠</p>
      </div>
      {modal == true ? <Modal /> : null} */}
    </div>
  );
}

// 컴포넌트: function만들기 -> return 내부 작성 -> <함수명></함수명>으로 사용
// 반복적인 html 축약, 큰 페이지들, 자주 변경되는 것들
// 컴포넌트 단점: state 가져다쓸 때 문제가 생기게 됨
const Modal = (props) => {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목]; // 카피본
          copy[0] = "여자 아우터 추천";
          props.제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

export default App;
