import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {

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
    }, 200);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    // return () => clearTimeout(timeout2);
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
    <header>
      <h2>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
