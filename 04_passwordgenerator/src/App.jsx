import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (includeNumbers) str += numbers;
    if (includeSymbols) str += symbols;

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);

  return (
    <>
      <div className="w-full bg-black h-screen">
        <div className="w-[700px] flex flex-col items-center justify-center gap-5 bg-indigo-900 m-auto h-80 rounded-lg text-center inset-x-0 top-10 fixed">
          <h1 className="text-4xl text-white font-bold">Password Generator</h1>

          <div className="flex gap-5">
            {/* Password Display input field */}
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              className="w-[90%] h-10 text-3xl rounded-md text-gray-700 bg-gray-200 px-5 h-15 cursor-pointer"
              autoComplete="off"
            />
            <button
              onClick={copyToClipboard}
              className="bg-amber-200 px-5 rounded"
            >
              Copy
            </button>
          </div>

          <div className="flex gap-3">
            <label className="text-white text-lg">
              Length:
              <input
                type="range"
                min="6"
                max="100"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="ml-2 text-center rounded mr-2"
              />
              {length}
            </label>
            <label className="text-white text-lg">
              Include Numbers:
              <input
                type="checkbox"
                defaultChecked={includeNumbers}
                onChange={() => {
                  setIncludeNumbers((prev) => !prev);
                }}
              />
            </label>
            <label className="text-white text-lg">
              Include Symbols:
              <input
                type="checkbox"
                defaultChecked={includeSymbols}
                onChange={() => {
                  setIncludeSymbols((prev) => !prev);
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
