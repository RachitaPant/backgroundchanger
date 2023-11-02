import { useState } from "react";

function App() {
  const [color, setColor] = useState("moccasin");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Crimson")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Crimson" }}
          >
            Crimson
          </button>
          <button
            onClick={() => setColor("DarkCyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "DarkCyan" }}
          >
            DarkCyan
          </button>
          <button
            onClick={() => setColor("AquaMArine")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "AquaMarine" }}
          >
            AquaMarine
          </button>
          <button
            onClick={() => setColor("Moccasin")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Moccasin" }}
          >
            Moccasin
          </button>
          <button
            onClick={() => setColor("beige")}
            className="outline-none px-4 py-1 rounded-full text-Black shadow-lg"
            style={{ backgroundColor: "beige" }}
          >
            Beige
          </button>
          <button
            onClick={() => setColor("Sienna")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Sienna" }}
          >
            Sienna
          </button>
          <button
            onClick={() => setColor("orchid")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orchid" }}
          >
            Orchid
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
