import { useEffect, useState } from "react";
import Watch from "./Watch";

const Cart = () => {
  const [item, setItem] = useState(0);
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://aspinchakma.github.io/api-for-practice/booksData.json",
      );
      const data = await res.json();
      setWatches(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-[80%] mx-auto mt-5">
      <h3 className="text-2xl font-bold">Total Item Number: {item}</h3>
      <button
        onClick={() => setItem(item + 1)}
        className="bg-blue-900 text-white border border-blue-800 px-4 py-2 rounded-sm block mt-4 font-medium cursor-pointer hover:text-blue-800 hover:bg-white transition duration-500"
      >
        Add More Item
      </button>

      <div className="grid grid-cols-3 gap-5 mt-6">
        {watches.map((book) => (
          <Watch book={book} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
