import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 👈 IMPORTANTE: agrega esta línea

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        {/* LOGO + TEXTO */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo Montreal Atlacomulco"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          Montreal Atlacomulco
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes Somos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/certificaciones">Certificaciones</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/enroll">Inscribirme</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
