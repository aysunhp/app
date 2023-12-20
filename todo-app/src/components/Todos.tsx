import { RootState } from "./../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/slices/todoSlice";
const Todos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos &&
          todos.map((item) => {
            return (
              <li key={item.id}>
                {item.tittle}{" "}
                <button
                  onClick={() => {
                    dispatch(deleteTodo(item.id));
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    const value = prompt();

                    let obj: {
                      id: string;
                      tittle: string;
                    } = {
                      id: item.id,
                      tittle: value,
                    };
                    console.log(obj);
                    console.log(todos);
                    dispatch(editTodo(obj));
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todos;
