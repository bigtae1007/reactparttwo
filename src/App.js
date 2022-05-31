import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// 컴포넌트 임포트
import MemoList from "./MemoList";
import SaveText from "./SaveText";
import Title from "./Title";
import BlindView from "./BlindView";
import ChgText from "./ChgText";
// 액션 함수 임포트
import { __getMemos } from "./redux/modules/memo";

function App() {
  const dispatch = useDispatch();
  const { loading, error, memo } = useSelector((state) => state.memos);
  React.useEffect(() => {
    dispatch(__getMemos());
  }, []);

  if (loading) {
    return <BlindView />;
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
