import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import logo from "../img/r3ai_logo.png";

export default function SignUp() {
  const [usuario, setUsuario] = useState({ nombre: "", apellido: "", email: "", contrasena: "" });
  const cookies = new Cookies();
  const history = useHistory();

  useEffect(() => {
    if (cookies.get("email_usuario")) {
      window.location.href = "../profile";
    }
  });

  const callAPI = () => {
    fetch(`https://backend-steel-rho.vercel.app/signin/${usuario.email}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.boolean) {
          fetch("https://backend-steel-rho.vercel.app/signin", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
              "Content-Type": "application/json",
            },
          });
          cookies.set("nombre_usuario", usuario.nombre, { path: "/" });
          cookies.set("apellido_usuario", usuario.apellido, { path: "/" });
          cookies.set("email_usuario", usuario.email, { path: "/" });
          history.push("/login");
          window.alert("Usuario Creado");
        } else {
          window.alert("El correo ya esta registrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCreate = () => {
    callAPI();
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
            <input className="form-control" type="text" placeholder="Ingresa tu nombre" value={usuario.nombre} onChange={(e) => setUsuario(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input className="form-control" type="text" placeholder="Ingresa tu apellido" value={usuario.apellido} onChange={(e) => setUsuario(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="Ingresa tu correo" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input className="form-control" type="password" placeholder="Ingresa tu Contraseña" value={usuario.contrasena} onChange={(e) => setUsuario({ ...usuario, contrasena: e.target.value })} />
          </div>
          <button className="btn btn-primary me-5" onClick={onCreate}>
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
