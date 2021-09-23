import React from "react";

import "../styles/Post.css";

export default function Post({ posts }) {
  return (
    <div>
      {posts.map((post) => {
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
              <form className="Form">
                <input className="form-control" type="text" placeholder="Enter your commentary" />
                <button variant="success" type="submit">
                  comment
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}
