import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
//dispatch 사용하기
import { useDispatch, useSelector } from "react-redux";
//순서대로 원하는db선택하기(콜렉션),수정할 document가져오기, 하나 가져오기, 여러개 가져오기, 추가하기, 수정하기
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// 컴포넌트
import MemoList from "./MemoList";
import SaveText from "./SaveText";
import Title from "./Title";
import ChgText from "./ChgText";
// firestore 연결
import { db } from "./firebase";
import { loadMemoFB } from "./redux/modules/memo";

function App() {
  const dispatch = useDispatch();
  const memo_list = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(loadMemoFB());
  }, []);

  // React.useEffect(() => {
  //   //삭제하기  해당 id를 싹 지워버린다  컬렉션 지우기는 찾아보자
  //   // const docRef = doc(db, "quizbbb", "TmnBDCz65SFmGSpc9wLW");
  //   // deleteDoc(docRef)
  //   //업데이트할 문서 집기 id값 가져오기 이어하는건 불가는 객체 전체를 수정해야한다.
  //   // const docRef = doc(db, "quizBtae", "VQ2jUHSS35PGnYEF4CWa");
  //   // updateDoc(docRef, {aaa:"Tom"});
  //   // 어떤 콜렉션에 추가하겠다 >> 새로운 id값으로 문서가 만들어짐 컬렉션 이름이 달라지만 새로 만든다.
  //   // addDoc(collection(db, "quizbbb"), {text : "aaa"})
  //   // 어떤 db, 어떤 콜렉션 quizBtae
  //   async function fetchData() {
  //     // promis로 오는 데이터 보기, forEach는 배열 매서드가 아닌 이 data전용 내장 함수
  //     const query = await getDocs(collection(db, "memo"));
  //     console.log(query, "aa");
  //     query.forEach((doc) => {
  //       console.log("a");
  //       console.log(doc.id, doc.data());
  //     });
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <Title />
      <Routes>
        <Route path="/" element={<MemoList />} />
        <Route path="/add" element={<SaveText />} />
        <Route path="/change/:id/:num" element={<ChgText />} />
      </Routes>
    </div>
  );
}

export default App;

const DivMargin = styled.div``;
