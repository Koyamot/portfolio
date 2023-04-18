import React from "react";
import { useParams } from "react-router";


const PortfolioPage = () => {
  // const { id } = useParams();
  // const p = data.portfolio;
  // const ux = data.portfolio.UXDesign.designProblem;
  // console.log("ux :", ux);
  return (
    // id: ID!
    // created_at: DateTime!
    // updated_at: DateTime!
    // Title: String
    // uxContent: String
    // Link: String
    // github: String
    // startDate: String
    // endDate: String
    // iUXed: String
    // team_size: String
    // iCoded: String
    // codeContent: String
    // Coding: [ComponentWebDevelopmentBullet]
    // UXDesign: [ComponentWebDevelopmentBullet]
    // id: ID!
    // Problem: String
    // Problem_Explanation: String
    // Design: String
    // Design_Explanation: String
    // Testing: String
    // Testing_Explanation: String
    // Reflection: String
    // Reflection_Explanation: String
    // designProblem: [ComponentWebDevelopmentDesignProblem]
    // problem_images(...): [UploadFile]
    // design_images(...): [UploadFile]
    // testing_images(...): [UploadFile]
    // reflection_images

    <div className="piece_explanation">
      <img src={`${p.Image[0].url}`} />
      <h1>{p.Title}</h1>
      <p>{p.team_size}</p>
      <a href={`${p.Link}`}>Live Site</a>
      <a href={`${p.github}`}>Github</a>
      <h2>Development Contribution</h2>
      <p>{p.codeContent}</p>
      {p.Coding.map((b) => (
        <p>• {b.Task}</p>
      ))}
      <h2>UX Contribution</h2>
      <p>{p.uxContent}</p>
      <h2>Design</h2>
      <h3>{p.UXDesign.Problem}</h3>
      <p>{p.UXDesign.Problem_Explanation}</p>
      <div className="image_container">
        {p.UXDesign.problem_images.map((img, i) => (
          <div className="image_sizer" key={i}>
            <img src={`${img.url}`} />
          </div>
        ))}
      </div>
      <h2>Design</h2>
      <h3>{p.UXDesign.Design}</h3>
      <p>{p.UXDesign.Design_Explanation}</p>
      <div className="image_container">
        {p.UXDesign.design_images.map((img, i) => (
          <div className="image_sizer" key={i}>
            <img src={`${img.url}`} />
          </div>
        ))}
      </div>
      {ux.map((d) => (
        <>
          <h3>{d.Goals}</h3>
          <p>{d.Goals_Explained}</p>
          <div className="image_container">
            {d.Goals_Pictures.map((img, i) => (
              <div className="image_sizer" key={i}>
                <img src={`${img.url}`} />
              </div>
            ))}
          </div>
        </>
      ))}
      <h2>Testing</h2>
      <h3>{p.UXDesign.Testing}</h3>
      <p>{p.UXDesign.Testing_Explanation}</p>
      <div className="image_container">
        {p.UXDesign.testing_images.map((img, i) => (
          <div className="image_sizer" key={i}>
            <img src={`${img.url}`} />
          </div>
        ))}
      </div>
      <h2>Reflection</h2>
      <h3>{p.UXDesign.Reflection}</h3>
      <p>{p.UXDesign.Reflection_Explanation}</p>
      <div className="image_container">
        {p.UXDesign.reflection_images.map((img, i) => (
                    <div className="image_sizer" key={i}>
                    <img src={`${img.url}`} />
                  </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
