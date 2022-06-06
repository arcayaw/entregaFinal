import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Cargando = () => {
  return (
    <>
      <div class="d-flex justify-content-center" className="bodySpinner">
        <Spinner
          animation="border"
          role="status"
          style={{ width: "3rem", height: "3rem", marginTop: "5rem" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Cargando;
