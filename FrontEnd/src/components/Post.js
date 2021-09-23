import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Post.css";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`).then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts
        ? posts.map((post) => {
            return (
              <div className="contenedor" key={post.id_publicacion}>
                <div className="caja">
                  <h1>{post.titulo_publicacion}</h1>
                  <p>{post.body_publicacion}</p>
                  <div className="imagen">
                    <img src={post.img_publicacion} alt={post.id_publicacion} className="img-fluid"></img>
                  </div>
                </div>
                <div className="comentario">
                  <div className="Form">
                    <form className="Form">
                      <input className="form-control" type="text" placeholder="Enter your commentary" />
                      <button variant="success" type="submit">
                        comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
