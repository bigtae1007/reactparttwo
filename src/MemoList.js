import React from "react";
import styled from "styled-components";
import MemoCard from "./MemoCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const MemoList = () => {
  const memoList = useSelector((state) => state.memo);
  console.log(memoList);
  const navigate = useNavigate();
  return (
    <WarmCard>
      {memoList.map((v, l) => {
        return <MemoCard key={v.id} memo={v} id={l} />;
      })}

      <AddBtn
        onClick={() => {
          navigate("/add");
        }}
      >
        +
      </AddBtn>
    </WarmCard>
  );
};

export default MemoList;

const WarmCard = styled.div`
  display: flex;
  margin: 100px auto 0;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;
const AddBtn = styled.button`
  position: fixed;
  background-color: rgba(1, 100, 1, 0.8);
  border: none;
  bottom: 40px;
  right: 40px;
  width: 80px;
  height: 80px;
  font-size: 5em;
  line-height: 8px;
  cursor: pointer;
  border-radius: 50%;
`;
