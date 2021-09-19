import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import logo from "../img/r3ai_logo.png";

const cookies = new Cookies();

export default function SignUp() {
  const history = useHistory();

  useEffect(() => {
    if (cookies.get("email_usuario")) {
      window.location.href = "../profile";
    }
  });

  const [nombre_usuario, setNombre_usuario] = useState("");
  const [contrasena_usuario, setContrasena_usuario] = useState("");
  const [apellido_usuario, setApellido_usuario] = useState("");
  const [email_usuario, setEmail_usuario] = useState("");

  const callAPI = () => {
    fetch(`https://backend-steel-rho.vercel.app/signin/${email_usuario}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.boolean) {
          fetch("https://backend-steel-rho.vercel.app/signin", {
            method: "POST",
            body: JSON.stringify({
              nombre_usuario: nombre_usuario,
              contrasena_usuario: contrasena_usuario,
              apellido_usuario: apellido_usuario,
              email_usuario: email_usuario,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          cookies.set("nombre_usuario", nombre_usuario, { path: "/" });
          cookies.set("apellido_usuario", apellido_usuario, { path: "/" });
          cookies.set("email_usuario", email_usuario, { path: "/" });
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
            <input className="form-control" type="text" placeholder="Ingresa tu nombre" onChange={(e) => setNombre_usuario(e.target.value)} value={nombre_usuario} />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input className="form-control" type="text" placeholder="Ingresa tu apellido" onChange={(e) => setApellido_usuario(e.target.value)} value={apellido_usuario} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="Ingresa tu correo" onChange={(e) => setEmail_usuario(e.target.value)} value={email_usuario} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input className="form-control" type="password" placeholder="Ingresa tu Contraseña" onChange={(e) => setContrasena_usuario(e.target.value)} value={contrasena_usuario} />
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
