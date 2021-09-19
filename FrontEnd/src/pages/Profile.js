import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/NavBar";
import Post from "../components/post_perfil";

//images
import Profile_bgUp from "../img/profile_bgUp.jpg";
import Profile_pp from "../img/profile_pp.jpg";

export default function Profile() {
  const [usuario, setUsuario] = useState({ nombre_usuario: "", apellido_usuario: "", escaneos_usuario: "", foto_usuario: Profile_pp });
  const [cookies, setCookie] = useCookies(["email_usuario"]);
  const history = useHistory();

  useEffect(() => {
    if (!cookies.email_usuario) {
      window.alert("Necesita iniciar sesion para usar esta función");
      history.push("/login");
    }

    fetch(`https://backend-steel-rho.vercel.app/escaneos/${cookies.get("id_usuario")}`)
      .then((res) => res.json())
      .then((res) => this.setState({ escaneos_usuario: res[0].escaneos_usuario }));

    fetch(`https://backend-steel-rho.vercel.app/foto/${cookies.get("id_usuario")}`)
      .then((res) => res.json())
      .then((res) => this.setState({ foto_usuario: res[0].foto_usuario }));
  });

  const images = {
    width: "100%",
    height: "100px",
  };
  return (
    <div>
      <Navbar />
      <div style={{ height: "67px" }} />
      <div className="row">
        <div className="col mt-4">
          <div style={{ images }} style={{ position: "absolute", zIndex: "-1" }}>
            <img src={Profile_bgUp} style={{ width: "100%", height: "180px" }} alt="bgUp" />
          </div>
          <div>
            <img src={this.state.foto_usuario} style={{ width: "180px", borderRadius: "50%", border: "3px solid white", marginTop: "90px" }} alt="pp" />
            <h3>
              {this.state.nombre_usuario} {this.state.apellido_usuario}
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <Link to="/reader" className="btn btn-primary" style={{ background: "#00b33e", width: "100%" }}>
              <strong>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-plus mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                  />
                  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                </svg>
                Escanear
              </strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <div className="p-1" style={{ background: "#00b33e", width: "100%", borderRadius: "5px" }}>
              <strong>Escaneos: {usuario.escaneos_usuario}</strong>
            </div>
          </div>
        </div>
        <Post />
      </div>
    </div>
  );
}
