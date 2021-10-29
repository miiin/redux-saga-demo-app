import { createAction, ActionType, createReducer } from 'typesafe-actions';

// export interface IPlus {
//   num?: number;
// }

// actions
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

export const plus = createAction(PLUS)();
export const minus = createAction(MINUS)();

// types
export const actions = { plus, minus };
type CounterAction = ActionType<typeof actions>;
type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

// reducer
const status = createReducer<CounterState, CounterAction>(initialState, {
  [PLUS]: (state, action) => {
    // const {num} = actions.payload;
    const {count} = state;
    const add = 1;
    const _count = count + add;
    return {count: _count};
  },
  [MINUS]: (state, action) => {
    const {count} = state;
    const _count = Math.max(count - 1, 0);
    return {count: _count};
  }
})

export default status;