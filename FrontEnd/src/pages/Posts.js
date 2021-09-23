import React from "react";

import NavBar from "../components/NavBar";
import Post from "../components/Post";

import "../index.css";

export default function Posts() {
  return (
    <div>
      <NavBar />
      <h2>Publicaciones</h2>
      <Post />
    </div>
  );
}
