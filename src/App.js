import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
//dispatch 사용하기
import { useDispatch, useSelector } from "react-redux";

// 컴포넌트
import MemoList from "./MemoList";
import SaveText from "./SaveText";
import Title from "./Title";
import ChgText from "./ChgText";
// firestore 연결
import { __getMemos } from "./redux/modules/memo";

function App() {
  const dispatch = useDispatch();
  const { loading, error, memo } = useSelector((state) => state.memos);
  React.useEffect(() => {
    dispatch(__getMemos());
  }, []);

  if (loading) {
    return <p>sdadsa</p>;
  }
  if (error) {
    return <p>i don't know</p>;
  }
  return (
    <div className="App">
      <Title />
      <p>123123</p>
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
