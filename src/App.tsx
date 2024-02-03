import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./Redux/Features/CounterSlice";

import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-10 bg-slate-50 shadow-lg">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-500 rounded-md text-xl font-simibold text-white mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 bg-green-500 rounded-md text-xl font-simibold text-white"
        >
          IncrementBy 5
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-500 rounded-md text-xl font-simibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
