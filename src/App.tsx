import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="font-bold text-5xl text-center selection:bg-pink-400 selection:text-white">
        Moanoghar Residential School And College.
      </h2>
    </>
  );
}

export default App;
