import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/NavBar";
import Post from "../components/post_perfil";

//images
import Profile_bgUp from "../img/profile_bgUp.jpg";
import Profile_pp from "../img/profile_pp.jpg";

export default function Profile() {
  const [usuario, setUsuario] = useState();
  const email_usuario = useCookies(["email_usuario"])[0];
  const history = useHistory();

  useEffect(() => {
    if (!email_usuario) {
      window.alert("Necesita iniciar sesion para usar esta función");
      history.push("/login");
    }

    axios.post(`${process.env.REACT_APP_API_URL}/profile`, email_usuario).then((res) => {
      setUsuario(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {usuario ? (
        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="row m-0 p-0 container-fluid">
              <div className="col" style={{ backgroundImage: `url(${Profile_bgUp})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="col mt-4">
                  <img
                    src={usuario.foto_usuario ? usuario.foto_usuario : Profile_pp}
                    style={{ width: "180px", borderRadius: "50%", border: "3px solid white", marginTop: "90px" }}
                    alt="pp"
                  />
                  <h3>
                    {usuario.nombre_usuario} {usuario.apellido_usuario}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0 container-fluid mt-5">
              <div className="col p-1" style={{ background: "#00b33e", width: "100%", borderRadius: "5px" }}>
                <strong>Escaneos: {usuario.escaneos_usuario}</strong>
              </div>
            </div>
            <Post posts={usuario.publicacions} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
