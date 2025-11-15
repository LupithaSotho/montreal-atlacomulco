import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light mt-5 pt-4 pb-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-4">

        {/* === CONTACTO === */}
        <div className="flex-fill">
          <h5 className="text-uppercase mb-3 fw-bold">Contacto</h5>
          <p className="mb-1">📞 Tel: 722 572 0866</p>
          <p className="mb-1">📧 atlacomulcomontreal@gmail.com</p>
          <p className="mb-0">
            📍 Circuito de los Maestros No. 26, Col. Las Fuentes, Atlacomulco, Edo. Méx.
          </p>
        </div>

        {/* === ENLACES INTERNOS === */}
        <div className="flex-fill">
          <h5 className="text-uppercase mb-3 fw-bold">Enlaces</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <Link to="/quienes-somos" className="link-light text-decoration-none">
                Quiénes somos
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/cursos" className="link-light text-decoration-none">
                Cursos
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/certificaciones" className="link-light text-decoration-none">
                Certificaciones
              </Link>
            </li>
            <li>
              <Link to="/enroll" className="link-light text-decoration-none">
                Inscripciones
              </Link>
            </li>
          </ul>
        </div>

        {/* === REDES SOCIALES === */}
        <div className="flex-fill">
          <h5 className="text-uppercase mb-3 fw-bold">Redes</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a
                className="link-light text-decoration-none"
                href="https://www.facebook.com/Montrealatlacomulcocert/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* === CRÉDITOS === */}
      <div className="text-center mt-4 small border-top pt-3 opacity-75">
        © 2025 <strong>Montreal: Idiomas, Tecnología y Cultura Atlacomulco</strong>  
        — Todos los derechos reservados.
      </div>
    </footer>
  );
}
