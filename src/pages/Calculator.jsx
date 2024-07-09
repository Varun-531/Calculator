import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const handleAddition = () => {
    // setResult(parseInt(input) + parseInt(input2));
    setOperator("+");
  };
  const handleMult = () => {
    //   setResult(parseInt(input) * parseInt(input2));
    setOperator("+");
  };
  const handleSub = () => {
    //   setResult(parseInt(input) - parseInt(input2));
    setOperator("-");
  };
  const handlediv = () => {
    //   setResult(parseInt(input) / parseInt(input2));
    setOperator("/");
  };
  const handleClear = () => {
    setInput("");
    setInput2("");
    setResult("");
    setOperator("");
  };
  const handleEqual = () => {
    if (operator === "+") {
      setResult(parseInt(input) + parseInt(input2));
    } else if (operator === "-") {
      setResult(parseInt(input) - parseInt(input2));
    } else if (operator === "*") {
      setResult(parseInt(input) * parseInt(input2));
    } else if (operator === "/") {
      setResult(parseInt(input) / parseInt(input2));
    }
  };
  return (
    <div className="md:w-full flex justify-center m-10">
      <div className="flex flex-col w-[70vw]  md:w-[30vw]">
        <h1 className="text-2xl font-semibold text-center mb-4">Calculator</h1>
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 my-2 border"
          />
          <input
            type="number"
            placeholder="0"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-full p-2 my-2 border"
          />
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="w-1/2 p-2 my-2 border"
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handlediv()}
            >
              /
            </button>
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handleMult()}
            >
              *
            </button>
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handleAddition()}
            >
              +
            </button>
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handleSub()}
            >
              -
            </button>
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handleClear()}
            >
              AC
            </button>
            <button
              className="bg-slate-300 rounded w-[10vw] border p-2 m-2 hover:bg-slate-900 hover:text-white flex justify-center items-center"
              onClick={() => handleEqual()}
            >
              =
            </button>
          </div>
        </div>
        <p className="font-semibold text-center mt-10">
          Result :{` ${result}`}
        </p>
      </div>
    </div>
  );
};

export default Calculator;
