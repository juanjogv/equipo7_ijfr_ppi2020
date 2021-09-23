import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import logo from "../img/r3ai_logo.png";

import "../index.css";

export default function IntroBlocks() {
  const [cookies] = useCookies(["email_usuario"]);
  const history = useHistory();

  useEffect(() => {
    if (cookies.email_usuario) {
      history.push("/profile");
    }
  });

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="logo" width="45px" />
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a class="nav-link" href="/login">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/signin">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg"></div>
      <section className="introblocks">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>"La Herramienta Más Eficiente Para Combatir El Cambio Climatico Eres Tú"</h2>
              <img className="img-fluid" src={logo} alt="r3ai_logo" />
            </div>
            <div className="col">
              <h3>¿Quienes Somos?</h3>
              <p>
                Nuestros nombres son Juan Jose Garcia, Sebastian Mendoza y Juan Pablo Rivera. Tres estudiantes que trabajamos en el proyecto R3AI, el cual esta impulsado por el
                Politecnico Colombiano Jaime Isaza Cadavid y la intitucion educativa INEM Jose Felix De Restrepo mediante una propuesta llamada Proyecto Pedagogico Integrador
                (PPI).
                <br />
              </p>
              <h3>Por Que R3AI?</h3>
              <p>R3AI proviene de las siglas en ingles Reuse Reduce and Recycle Artificial Inteligence</p>
            </div>
            <div className="col">
              <h3>¿Que Es R3AI?</h3>
              <p>
                R3AI es una app mediante la cual se informa, incentiva y ayuda en la clacificacion de residuos solidos a las personas para hacerlo de manera eficaz, rapida y
                eficiente.
                <br />
              </p>
              <h3>¿Por Que Somos Los Mejores?</h3>
              <p>
                Nos diferenciamos de proyectos similares pues poseemos la ventaja de la portabilidad y de contar una interfaz amigable que le permite a nuestros usuarios una
                experiencia didactica y de aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
