import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import logo from "../img/r3ai_logo.png";
import camara from "../img/NavBar2/camara.png";
import competencia from "../img/NavBar2/competencia.png";
import user from "../img/NavBar2/user.png";
import logout from "../img/NavBar2/logout.png";

export default function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["email_usuario"]);
  const history = useHistory();

  useEffect(() => {
    if (!cookies.email_usuario) {
      window.alert("Necesita iniciar sesion para usar esta función");
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/posts">
          <img src={logo} alt="logo" width="45px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <img src={user} alt="logo" width="45px" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reader">
                <img src={camara} alt="logo" width="45px" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ranking">
                <img src={competencia} alt="logo" width="45px" />
              </Link>
            </li>
          </ul>
          <div>
            <button
              className="btn"
              type="submit"
              onClick={(e) => {
                removeCookie("email_usuario");
                history.push("/");
              }}
            >
              <img src={logout} alt="logo" width="45px" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
