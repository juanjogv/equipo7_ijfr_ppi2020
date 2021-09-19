import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/r3ai_logo.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login() {
  useEffect(() => {
    if (cookies.get("email_usuario")) {
      window.location.href = "../profile";
    }
  });

  const [contrasena_usuario, setContrasena_usuario] = useState("");
  const [email_usuario, setEmail_usuario] = useState("");
  const history = useHistory();

  const callAPI = (e) => {
    fetch(`https://backend-steel-rho.vercel.app/login/${email_usuario}/${contrasena_usuario}`)
      .then((res) => res.json())
      .then(
        (res) => {
          if (res[1].validPass) {
            cookies.set("id_usuario", res[0].id_usuario, { path: "/" });
            cookies.set("nombre_usuario", res[0].nombre_usuario, { path: "/" });
            cookies.set("apellido_usuario", res[0].apellido_usuario, { path: "/" });
            cookies.set("email_usuario", res[0].email_usuario, { path: "/" });
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
            <h1>Iniciar sesión</h1>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="Ingresa tu correo" onChange={(e) => setEmail_usuario(e.target.value)} value={email_usuario} />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Contraseña" onChange={(e) => setContrasena_usuario(e.target.value)} value={contrasena_usuario} />
          </div>
          <button class="btn btn-primary me-5" onClick={onCreate}>
            Inicar sesión
          </button>
          <Link class="btn btn-primary ms-5" to="/">
            Crear una cuenta
          </Link>
        </form>
      </div>
    </div>
  );
}
