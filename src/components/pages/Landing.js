import React, { useState, useEffect } from "react";
import { Portfolio } from "../common";


const Landing = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length + 1)
      return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  const words = [
    "hello. i am kyla.",
    "i am a ux engineer.",
    "i think about human interaction.",
    "if you want to know more, let's connect.",
  ];

  return (
    <div className="landing">
      <h1>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h1>
      {/* {index === words.length - 1 && subIndex === words[3].length + 1 ? (
        <Portfolio />
      ) : null} */}
      <Portfolio />
    </div>
  );
};

export default Landing;
