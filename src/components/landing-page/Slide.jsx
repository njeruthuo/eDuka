import { useState, useEffect } from "react";
import data from "../../data";

let Slide = function () {
  const [selected, setSelected] = useState(1);
  const [typedText, setTypedText] = useState("");
  let slide = data.find((item) => item.id === selected);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(slide.desc.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === slide.desc.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [slide]);

  const next = () => {
    setSelected((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const previous = () => {
    setSelected((prev) => (prev <= 1 ? 3 : prev - 1));
  };

  const selectClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="relative">
      <img className="min-h-screen landing-page" src={slide?.img} alt="" />
      <p className="absolute top-[30%] w-full text-center gradient-text">
        {typedText}
      </p>

      <span
        onClick={previous}
        className="absolute top-[50%] left-4 text-blue-700"
      >
        &lt;
      </span>
      <span onClick={next} className="absolute top-[50%] right-4 text-blue-700">
        &gt;
      </span>
      <button className="absolute top-[50%] left-[40%] right-[40%] getStarted px-8 py-2 text-white font-bold rounded-[50px] hover:translate-y-1">
        Start Shopping
      </button>

      <div
        id="bars"
        className="absolute flex space-x-4 bottom-8 w-full justify-center"
      >
        {[1, 2, 3].map((id) => (
          <p
            key={id}
            onClick={() => selectClick(id)}
            className={
              selected === id ? "w-12 h-1 bg-red-400" : "w-12 h-1 bg-gray-400"
            }
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Slide;
