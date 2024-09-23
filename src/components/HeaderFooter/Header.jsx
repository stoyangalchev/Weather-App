import { useContext, useState } from "react";

import { WeatherContext } from "../../context/WeatherContextProvider";

export default function Header() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "WeatherContext must be used within a WeatherContextProvider"
    );
  }
  const { degreeType, changeDegreeType } = context;
  const [degree, setDegree] = useState("C");


  const changeDegree = () => {
    if (degreeType === "C") {
      setDegree("F");
      changeDegreeType("F");
    } else {
      setDegree("C");
      changeDegreeType("C");
    }
  };

  return (
    <div className="flex justify-around w-full p-5 text-gray-700 bg-slate-900 items-center">
      <h1 className="text-4xl font-extrabold lg:col-start-2 text-transparent bg-clip-text bg-yellow-400  drop-shadow-[0_0_10px_rgba(255,165,0,0.8)] ">
        Weather App
      </h1>
      <div className="flex gap-1 text-base">
        <button
          className={degree === "C" ? "text-yellow-500 font-bold" : "font-bold"}
          type="button"
          onClick={() => changeDegree()}
        >
          Cº
        </button>
        <span className="font-bold">/</span>
        <button
          className={
            degree === "F" ? "text-yellow-500 font-bold" : " font-bold"
          }
          type="button"
          onClick={() => changeDegree()}
        >
          Fº
        </button>
      </div>
    </div>
  );
}
