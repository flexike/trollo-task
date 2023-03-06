import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decr, incr, double, clear } from "./store/reducers/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <p>Redux Counter</p>
      <p className="text-2xl m-4">{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(incr());
          }}
          className="mx-3 border-2 px-2 border-black rounded-xl"
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(decr());
          }}
          className="mx-3 border-2 px-2 border-black rounded-xl"
        >
          Remove
        </button>
        <button
          onClick={() => {
            dispatch(double());
          }}
          className="mx-3 border-2 px-2 border-black rounded-xl"
        >
          Double
        </button>
        <button
          onClick={() => {
            dispatch(clear());
          }}
          className="mx-3 border-2 px-2 border-black rounded-xl"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
