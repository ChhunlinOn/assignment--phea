import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchTodos } from "../store/shoppingSlice";


export const ShoppingList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // const items = ["Apples", "Bananas", "Oranges"]
  const userName = useSelector((state: RootState) => state.Username.item)
  const items = useSelector((state: RootState) => state.Shopping.items);

  useEffect(() => {
    dispatch(fetchTodos()); // ✅ Dispatch fetchTodos when component mounts
}, [dispatch]);


  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center text-black">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <p className="text-lg mb-4">Welcome, {userName || "Guest"}!</p> {/* Display user name */}
      {items.length === 0 ? (
        <p className="text-gray-500">Nothing to buy yet!</p>
      ) : (
        <ul className="space-y-2 w-full max-w-md">
          {items.map((item, id) => (
            <li
              key={id}
              className="flex items-center justify-between p-2 bg-white rounded shadow"
            >
              <span
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-4 py-2 bg-black-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/add-item")}
      >
        Add Item
      </button>
    </div>
  );
};