import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
// 액션 실행
import { useDispatch } from "react-redux";
// 추가 액션함수
import { __updateMemo } from "./redux/modules/memo";
import { useSelector } from "react-redux";

const ChgText = () => {
  // 파라미터로 주소받기 (데이터 id값, 인덱스 값)
  const { id, num } = useParams();

  const { loading, error, memo } = useSelector((state) => state.memos);
  // 해당 단어장 데이터 가져오기
  const textMemo = memo[num];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const word = useRef();
  const comment = useRef();
  const ex = useRef();

  useEffect(() => {
    // 콜체인 사용하여 새로고침 에러 방지
    word.current.value = textMemo?.word;
    comment.current.value = textMemo?.comment;
    ex.current.value = textMemo?.ex;
  });

  // 수정 내용 저장하기 이벤트
  const textChg = () => {
    if (
      word.current.value !== "" &&
      comment.current.value !== "" &&
      ex.current.value !== ""
    ) {
      dispatch(
        __updateMemo(
          {
            id: id,
            word: word.current.value,
            comment: comment.current.value,
            ex: ex.current.value,
            check: false,
          },
          num
        )
      );
      alert("단어 저장 완료 ! ");
      navigate("/");
    } else {
      alert("빈칸 없이 작성해 주세요 ! ");
    }
  };
  if (loading) {
    return <p>sdadsa</p>;
  }
  if (error) {
    return <p>i don't know</p>;
  }
  return (
    <FormWrap>
      <BackArrow
        onClick={() => {
          navigate(-1);
        }}
      >
        &#9754;
      </BackArrow>
      <h2>단어 수정하기</h2>
      <span>단어</span>
      <input type="text" ref={word} />
      <span>설명</span>
      <input type="text" ref={comment} />
      <span>예시</span>
      <input type="text" ref={ex} />
      <button
        onClick={() => {
          textChg();
        }}
      >
        수정하기
      </button>
    </FormWrap>
  );
};
export default ChgText;

const FormWrap = styled.div`
  margin: 90px auto 0;
  display: flex;
  padding: 10px;
  width: 400px;
  flex-direction: column;
  height: 350px;
  justify-content: space-around;
  & > h2 {
    color: rgb(103 197 100);
    text-align: center;
  }
  & > button {
    width: 50%;
    margin: 0 auto;
    height: 40px;
    background-color: green;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }
  & > input {
    border: none;
    border-bottom: 2px solid rgb(193 207 190);
    outline: none;
    padding: 0 0 10px;
    &:focus {
      transition: all 1s;
      border-bottom: 2px solid green;
    }
  }
`;

const BackArrow = styled.span`
  position: absolute;
  cursor: pointer;
  top: 110px;
  font-size: 40px;
  color: green;
  font-weight: 200;
`;
