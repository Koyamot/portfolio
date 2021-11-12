import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Avatar, Post } from "../common";

const GET_DATA = gql`
  query getAvatar {
    avatar {
      Name
      Image {
        id
        url
        previewUrl
      }
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_DATA, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>DOH! :(</p>;
    
    const avatar = data.avatar
    
  return (
    <div className="blog_container">
      <Avatar avatar={avatar}/>
      <Post />
    </div>
  );
};

export default Blog;
