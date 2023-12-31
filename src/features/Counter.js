import React from "react";
import {
  UseSelector,
  useDispatch,
  useSelector,
} from "react-redux/es/hooks/useSelector";
import { increment, decrement } from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
