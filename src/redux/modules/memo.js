const initialState = [
  {
    id: "aaa",
    word: "aaaaa",
    comment: "이뜻입니다.",
    ex: "이렇게 작성",
    check: false,
  },
];

// const LOAD = "memo/LOAD";
// 액션
const CREATE = "memo/CREATE";
const UPDATE_check = "memo_check/UPDATE";
const REMOVE = "memo/REMOVE";
const DELETE = "memo/DETELE";

//액션 함수
export const createMemo = (memo) => {
  return { type: CREATE, memo };
};

export const updateCheck = (index_id) => {
  return { type: UPDATE_check, index_id };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    // case LOAD:
    //   //기본 데이터와 동일하게 하기 위해 앞에 안붙임
    //   return action.quiz_list;
    case CREATE:
      const newMemo = [...state, action.memo];
      return newMemo;
    case UPDATE_check:
      const checkMemo = state.map((v, l) => {
        if (l === action.index_id) {
          v.check = true;
          console.log(v);
          return v;
        } else {
          console.log(v);

          return v;
        }
      });
      console.log(state);
      console.log(action.index_id);
    default:
      return state;
  }
}
