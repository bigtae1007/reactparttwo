import { db } from "../../firebase";

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
import { async } from "@firebase/util";
import { memo } from "react";

const initialState = [
  // {
  //   id: "aaa",
  //   word: "aaaaa",
  //   comment: "이뜻입니다.",
  //   ex: "이렇게 작성",
  //   check: false,
  // },
];

// 액션
const LOAD = "memo/LOAD";

const CREATE = "memo/CREATE";
const UPDATE_check = "memo_check/UPDATE";
const UPDATE_memo = "memo/UPDATE";
// const REMOVE = "memo/REMOVE";
const DELETE = "memo/DETELE";

//액션 함수

//firestore 데이터 가져오기
export function loadMemo(memo_list) {
  return { type: LOAD, memo_list };
}

export const createMemo = (memo) => {
  return { type: CREATE, memo };
};

export const updateCheck = (index_id) => {
  return { type: UPDATE_check, index_id };
};

export const updateMemo = (memo, index) => {
  return { type: UPDATE_memo, memo, index };
};

export const deleteMemo = (index_id) => {
  return { type: DELETE, index_id };
};

//미들 웨어 함수

export const loadMemoFB = () => {
  //인자를 dispatch를 받는다 비동기 통신이기 때문에 async await 사용
  return async function (dispatch) {
    // 데이터를 d가져와요!
    const memo_data = await getDocs(collection(db, "memo"));
    let memo = [];
    // 여기서 forEach 는 배열 매서드 아닌 내장 함수 사용
    memo_data.forEach((doc) => {
      // id값이 필요하면 doc.id 저장
      memo.push({ id: doc.id, ...doc.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    dispatch(loadMemo(memo));
  };
};

//글 추가하기
export const createMemoFB = (memo_data) => {
  return async function (dispatch) {
    // 원래는 데이터에 id값을 추가하여 가져오는 게 좋다. 이건 하나만 사용하니까
    const docRef = await addDoc(collection(db, "memo"), memo_data);
    const memo = { id: docRef.id, ...memo_data };
    dispatch(createMemo(memo));
  };
};

// 체크 표시 변경하기
export const updateCheckFB = (memo_id, check) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "memo", memo_id);
    if (check) {
      await updateDoc(docRef, { check: false });
    } else {
      await updateDoc(docRef, { check: true });
    }
    const memo_index = getState().memo.findIndex((v) => {
      return v.id === memo_id;
    });
    dispatch(updateCheck(memo_index));
  };
};

// 메모 변경
export const updateMemoFB = (memo_data, memo_id, memo_index) => {
  return async function (dispatch) {
    const docRef = doc(db, "memo", memo_id);
    await updateDoc(docRef, {
      comment: memo_data.comment,
      word: memo_data.word,
      ex: memo_data.ex,
    });
    dispatch(updateMemo(memo_data, memo_index));
  };
};

// 메모 삭제
export const deleteMemoFB = (memo_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "memo", memo_id);
    await deleteDoc(docRef);
    const memo_index = getState().memo.findIndex((v) => {
      return v.id === memo_id;
    });
    dispatch(deleteMemo(memo_index));
  };
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return action.memo_list;
    case CREATE:
      const newMemo = [...state, action.memo];
      return newMemo;

    case UPDATE_check:
      const checkMemo = state.map((v, l) => {
        if (l === action.index_id) {
          v.check ? (v.check = false) : (v.check = true);
          return v;
        } else {
          return v;
        }
      });
      return checkMemo;

    case DELETE:
      const deleteMemo = state.filter((v, l) => {
        return action.index_id === l ? false : true;
      });
      return deleteMemo;
    case UPDATE_memo:
      const changeNewMemo = state.map((v, l) => {
        return l === Number(action.index) ? action.memo : v;
      });
      return changeNewMemo;
    default:
      return state;
  }
}
