import React, { useEffect, useState } from "react";
import QrReader from "react-qr-reader";

import NavBar from "../components/NavBar";
import QRCard from "../components/QRCard";

// let prueba = false;

export default function QRReader() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // if (!prueba) {
    //   fetch(`https://backend-steel-rho.vercel.app/scanner/${cookies.get("id_usuario")}`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       const num = res[0].escaneos_usuario++;
    //       fetch(`https://backend-steel-rho.vercel.app/scanner/ola`, {
    //         method: "POST",
    //         body: JSON.stringify({
    //           id_usuario: cookies.get("id_usuario"),
    //           num: num,
    //         }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }).then(console.log("hola krnal"));
    //       prueba = true;
    //     });
    // }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mt-6">
        <div className="row">
          <div className="col">
            <QrReader
              delay={3000}
              style={{ width: "75%" }}
              onScan={(e) => {
                setResult(e);
              }}
              className="p-0 m-0"
            />
          </div>
          <div className="col">{result ? <QRCard data={result} /> : <h4> Por favor ingrese un codigo QR</h4>}</div>
        </div>
      </div>
    </div>
  );
}
