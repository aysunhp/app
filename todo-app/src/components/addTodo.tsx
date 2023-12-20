import { reduxAddTodo, reduxAddTodos } from "../redux/slices/todoSlice";
import { RootState } from "./../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const AddTodo = () => {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="enter new todo"
        value={todo.tittle}
        onChange={(e) => {
          let obj = {
            id: uuidv4(),
            tittle: e.target.value,
          };
          dispatch(reduxAddTodo(obj));
        }}
      />
      <button
        onClick={() => {
          dispatch(reduxAddTodos());
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
