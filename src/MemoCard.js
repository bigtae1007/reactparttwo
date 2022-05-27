import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCheck, deleteMemo } from "./redux/modules/memo";
import { useNavigate } from "react-router-dom";

const MemoCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memoData = props.memo;
  const checkState = props.complete;
  const indexId = props.id;
  // 완료 표시 후 check 상태 변경하기
  const chgCheck = (index_id) => {
    dispatch(updateCheck(index_id));
    console.log(checkState);
  };

  // 삭제 클릭 후 삭제하기
  const delMemo = (index_id) => {
    dispatch(deleteMemo(index_id));
  };
  const chgMemo = (index_id) => {
    navigate(`/change/${index_id}`);
  };
  console.log(props.memo.check);

  return (
    <WarpCard check={checkState}>
      <BtnDiv>
        <Btn
          onClick={() => {
            chgCheck(indexId);
          }}
        >
          &#10003;
        </Btn>
        <Btn
          onClick={() => {
            chgMemo(indexId);
          }}
        >
          &#8634;
        </Btn>
        <Btn
          onClick={() => {
            delMemo(indexId);
          }}
        >
          &#10008;
        </Btn>
      </BtnDiv>
      <h4>
        <SpanText>단어</SpanText>
        <br />
        {memoData.word}.
      </h4>

      <p>
        <SpanText>설명</SpanText>
        <br />
        {memoData.comment}
      </p>

      <BlueColorP>
        <SpanText>예시</SpanText>
        <br />
        {memoData.ex}
      </BlueColorP>
    </WarpCard>
  );
};
export default MemoCard;

const WarpCard = styled.div`
  border: 1px solid green;
  border-radius: 15px;
  position: relative;
  min-height: 100px;
  min-width: 300px;
  padding: 5px 15px;
  background-color: ${(props) => {
    return props.check ? "rgb(219, 232, 216)" : "#fff";
  }};
`;

const SpanText = styled.span`
  text-decoration: underline;
  font-size: 10px;
  color: #000;
`;

const BlueColorP = styled.p`
  color: #51f;
`;

const BtnDiv = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  right: 15px;
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: green;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    background-color: green;
    color: #fff;
  }
`;
