import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
import MemoList from "./MemoList";
import SaveText from "./SaveText";
import Title from "./Title";
import ChgText from "./ChgText";

function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
        <Route path="/" element={<MemoList />} />
        <Route path="/add" element={<SaveText />} />
        <Route path="/change/:index" element={<ChgText />} />
      </Routes>
    </div>
  );
}

export default App;

const DivMargin = styled.div``;
