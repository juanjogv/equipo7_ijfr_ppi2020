import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";

import logo from "../img/r3ai_logo.png";

export default function Login() {
  const [usuario, setUsuario] = useState({ email: "", contrasena: "" });
  const [cookies, setCookie] = useCookies(["user_email"]);
  const history = useHistory();

  useEffect(() => {
    console.log(process.env);
    if (cookies.user_email) {
      history.push("/profile");
    }
  }, []);

  const callAPI = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/login/${usuario.email}/${usuario.contrasena}`)
      .then((res) => res.json())
      .then(
        (res) => {
          if (res[1].validPass) {
            setCookie("email_usuario", usuario.email, { path: "/" });
            history.push("/profile");
          } else {
            window.alert("Contraseña invalida");
          }
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => console.log(error));
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
            <h1>Iniciar sesión</h1>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input className="form-control" type="email" placeholder="Ingresa tu correo" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="Contraseña" value={usuario.contrasena} onChange={(e) => setUsuario({ ...usuario, contrasena: e.target.value })} />
          </div>
          <button className="btn btn-primary me-5" onClick={callAPI}>
            Inicar sesión
          </button>
          <Link className="btn btn-primary ms-5" to="/signin">
            Crear una cuenta
          </Link>
        </form>
      </div>
    </div>
  );
}
