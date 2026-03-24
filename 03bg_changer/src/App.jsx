import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <section
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl fixed flex flex-wrap justify-center inset-x-0 top-[45%] font-bold">Current color: {color}</h1> <br />
        <div className="fixed flex flex-wrap inset-x-0 justify-center w-80 m-auto bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-4 rounded-3xl">
            <button className="text-white py-2 px-4 rounded-full" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="text-white py-2 px-4 rounded-full" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className="text-white py-2 px-4 rounded-full" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
