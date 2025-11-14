import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-5 p-4">
      <h1 className="fw-bold" style={{ color: "#D32F2F" }}>404 - Página no encontrada</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe o fue movida.</p>

      <Link to="/" className="btn btn-danger btn-lg">
        Volver al inicio
      </Link>
    </div>
  );
}
