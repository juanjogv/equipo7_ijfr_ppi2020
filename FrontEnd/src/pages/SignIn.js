import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import logo from "../img/r3ai_logo.png";

export default function SignUp() {
  const [usuario, setUsuario] = useState({ nombre_usuario: "", apellido_usuario: "", email_usuario: "", contrasena_usuario: "" });
  const [cookies, setCookie] = useCookies(["email_usuario"]);
  const history = useHistory();

  useEffect(() => {
    if (cookies.email_usuario) {
      history.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callAPI = (e) => {
    e.preventDefault();
    console.log(usuario);
    axios.post(`${process.env.REACT_APP_API_URL}/signin`, usuario).then((res) => {
      if (res.data) {
        setCookie("email_usuario", usuario.email_usuario, { path: "/" });
        window.alert("Usuario Creado");
        history.push("/profile");
      } else {
        window.alert("El correo ya esta registrado");
      }
    });
  };

  return (
    <div className="row h-100 p-0 m-0 align-items-center" style={{ backgroundColor: "rgb(240, 242, 245)" }}>
      <div className="col">
        <img className="img-fluid" src={logo} width="50%" alt="r3ai_logo" />
        <h1>R3AI</h1>
      </div>
      <div className="col me-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <form className="p-3">
          <div>
            <h1>Registrarse</h1>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa tu nombre"
              value={usuario.nombre_usuario}
              onChange={(e) => setUsuario({ ...usuario, nombre_usuario: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa tu apellido"
              value={usuario.apellido_usuario}
              onChange={(e) => setUsuario({ ...usuario, apellido_usuario: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Ingresa tu correo"
              value={usuario.email_usuario}
              onChange={(e) => setUsuario({ ...usuario, email_usuario: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              className="form-control"
              type="password"
              placeholder="Ingresa tu Contraseña"
              value={usuario.contrasena_usuario}
              onChange={(e) => setUsuario({ ...usuario, contrasena_usuario: e.target.value })}
            />
          </div>
          <button className="btn btn-primary me-5" onClick={callAPI}>
            Crear una cuenta
          </button>
          <Link className="btn btn-primary ms-5" to="/login">
            Inicar sesión
          </Link>
        </form>
      </div>
    </div>
  );
}
