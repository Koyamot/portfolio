import React, { useState, useEffect } from "react";

const Landing = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
  
    console.log("This is subIndex", subIndex);
    console.log("This is index", index);
    console.log("Reverse ", reverse);
  
    // typeWriter
    useEffect(() => {
      if (index === words.length) {
        setIndex(0)
      }
  
      if (index === words.length - 1 && subIndex === words[index].length + 1) {
        setReverse(true);
        const timeout3 = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 100);
        return () => {
          clearTimeout(timeout3);
        };
      }
  
      if (index !== words.length - 1 && !reverse) {
        if (index === words.length) {
          setIndex(0);
          const timeout4 = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
          }, 100);
          return () => clearTimeout(timeout4);
        } else if (subIndex === words[index].length + 1) {
          setReverse(true);
          return;
        }
      }
  
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => prev + 1);
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, 100);
  
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
      "i am a ux designer.",
      "and a web developer.",
      "i like to solve problems.",
      "i think about human interaction",
      "let's connect.",
    ];
  
  return (
    <div className="landing">
      {index === words.length ? (
        <h1>{`${words[0].substring(0, subIndex)}${blink ? "|" : ""}`}</h1>
      ) : (
        <h1>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h1>
      )}
    </div>
  );
};

export default Landing;
