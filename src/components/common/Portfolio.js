import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_DATA = gql`
  query getData {
    portfolios {
      id
      Title
      Image {
        id
        url
      }
      uxContent
    }
  }
`;

const Portfolio = () => {
  const { loading, error, data } = useQuery(GET_DATA, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;

  const portfolios = data.portfolios;

  return (
    <div className="portfolio_container">
      <h1 className="portfolio_h1">
        View my gallery of visual human experiences
      </h1>
      <div className="hold_portfolio">
        {portfolios.map((x, i) => (
          <Link to={`/portfolio/${x.id}`} key={i}>
          <Pieces p={x} key={i}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Pieces = ({ p }) => {
  console.log(p);
  return (
    <div className="portfolio_pieces">
      <div key={p.id}>
        <img src={p.Image[0].url} alt="Word Hoax!" />
        <h4>{p.Title}</h4>
        <p>{p.uxContent}</p>
      </div>
    </div>
  );
};

export default Portfolio;
