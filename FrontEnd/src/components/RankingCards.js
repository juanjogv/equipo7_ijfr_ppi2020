import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Card.css";

let num = 1;

export default function RankingCards() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/ranking`).then((res) => setRanking(res.data));
  }, []);

  return (
    <div className="row justify-content-center">
      {ranking
        ? ranking.map((card) => (
            <div class="card col" style={{ width: "18rem" }}>
              <img src={card.foto_usuario} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {card.nombre_usuario} {card.apellido_usuario}
                </h5>
                <p class="card-text">
                  Puesto: {num++} <br />
                  escaneos: {card.escaneos_usuario}
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
