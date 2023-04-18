import React, { useState, useEffect, useRef } from "react";
import { Portfolio } from "../common";
import "../../styles/Landing.css";

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length + 1) {
      return;
    }

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
    "if you want to know more, let's connect!",
  ];

  const space = " ";

  return (
    <div className="landing">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold inline-block hover:text-transparent hover:bg-clip-text py-3 h-16 hover:animate-bounce hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">&nbsp;{`${words[
              index
            ].substring(0, subIndex)}${blink ? "|" : " "}`}</h1>
            <div className="avatar py-6 flex justify-evenly ">
              <div className="w-24 rounded ">
                <img src="https://portfoliobucket85.s3.us-west-2.amazonaws.com/avatar0.jpg" />
              </div>
              <div className="w-24 rounded">
                <img src="https://portfoliobucket85.s3.us-west-2.amazonaws.com/avatar1.jpg" />
              </div>
              <div className="w-24 rounded">
                <img src="https://portfoliobucket85.s3.us-west-2.amazonaws.com/avatar2.jpg" />
              </div>
            </div>
            <h2 className="text-xl font-bold pb-3">Design Strengths:</h2>
            <p className="pb-12 ">
              Figma • Photoshop • Illustrator • After Effects • Whimsical • Invision • Miro • Prototyping • Wireframing • User Flows • Mockups • User Testing • Application Development • 2D Animation • Procreate • 3D Modeling • 3D Texturing • Blender • Presentation • Communication
            </p>
            <h2 className="text-xl font-bold pb-3">Engineering Strengths:</h2>
            <p className="pb-12 ">
              Nodejs • Express • Knex • Javascript • Python • Postgres • MongoDB
              • SQL • NoSQL • RESTful APIs • Headless CMS • Heroku • AWS •
              Docker • Terminal • Okta • Auth0 • Postman • CI/CD • OOP •
              Unit Testing • jest • cypress.io • Apollo Client • GraphQL • HTML
              • Javascript • Typescript • Notion • ReactJS • Recoil • Redux • ContextAPI •Styled-Components • CSS
              (Less/Sass) • PHP • GitHub • git • VSCode • Jira
            </p>
            <button
              className="btn btn-primary block mx-auto  shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all rounded"
              onClick={handleClick}
            >
              {" "}
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      <Portfolio ref={ref} />
    </div>
  );
};

export default Landing;
