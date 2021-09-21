/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Plasticos from "../img/plasticos.png";
import papel from "../img/papel.png";
import ordinario from "../img/ordinarios.png";

export default function QR_Card({ data }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {data === "plastico" ? (
        <div>
          <img src={Plasticos} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plastico</h5>
            <p className="card-text">
              Este residuo se deposita en la caneca azul <br />
              Un producto de platico puede durar miles de años antes de degradarse
            </p>
            <a target="_blank" href="https://www.google.com" variant="primary" className="btn btn-primary">
              Mas Informacion
            </a>
          </div>
        </div>
      ) : data === "papel" ? (
        <div>
          <img src={papel} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plastico</h5>
            <p className="card-text">
              Estos se depositan en la caneca gris <br />
              Estos residuos se degrada de 1 a 6 meses
            </p>
            <a target="_blank" href="https://www.google.com" variant="primary" className="btn btn-primary">
              Mas Informacion
            </a>
          </div>
        </div>
      ) : data === "ordinario" ? (
        <div>
          <img src={ordinario} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plastico</h5>
            <p className="card-text">
              Estos residuos son los que por lo general se desechan en los domicilios y se depositan en la caneca verde <br />
              Tambien se pueden catalogar de residuos ordinarios los que son de desecho industrial o de limpieza de areas publicas
            </p>
            <a target="_blank" href="https://www.google.com" variant="primary" className="btn btn-primary">
              Mas Informacion
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
