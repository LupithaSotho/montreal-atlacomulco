import React, { useEffect, useState } from "react";

export default function Inscripciones() {
  const [inscripciones, setInscripciones] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    edad: "",
    curso: "",
    nivel: "",
    fecha_inicio: "",
    nuevo_ingreso: true,
    comentarios: "",
  });

  // URL base del backend
  const API_URL = "https://montreal-backend-production-def9.up.railway.app/api";

  // =========================
  // CARGAR INSCRIPCIONES
  // =========================
  const cargarInscripciones = async () => {
    try {
      const res = await fetch(`${API_URL}/inscripciones/`);
      const data = await res.json();
      setInscripciones(data);
    } catch (error) {
      console.error(error);
      alert("⚠️ Error al cargar inscripciones.");
    }
  };

  useEffect(() => {
    cargarInscripciones();
  }, []);

  // =========================
  // ELIMINAR INSCRIPCIÓN
  // =========================
  const eliminarInscripcion = async (id) => {
    if (!window.confirm("¿Eliminar esta inscripción?")) return;

    try {
      await fetch(`${API_URL}/inscripciones/${id}/`, {
        method: "DELETE",
      });

      cargarInscripciones();
    } catch (error) {
      alert("No se pudo eliminar la inscripción");
    }
  };

  // =========================
  // INICIAR EDICIÓN
  // =========================
  const iniciarEdicion = (item) => {
    setEditId(item.id);
    setFormData({ ...item });
  };

  // =========================
  // GUARDAR EDICIÓN
  // =========================
  const guardarEdicion = async (e) => {
    e.preventDefault();

    const dataToSend = { ...formData };
    delete dataToSend.id;

    try {
      await fetch(`${API_URL}/inscripciones/${editId}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      alert("✅ Cambios guardados");
      setEditId(null);
      cargarInscripciones();
    } catch (error) {
      alert("Error al guardar cambios");
    }
  };

  // =========================
  // MANEJAR CAMBIOS DEL FORM
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">
        Consultar / Editar / Eliminar Inscripciones
      </h2>

      {/* TABLA */}
      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Nivel</th>
            <th>Fecha Inicio</th>
            <th>Nuevo</th>
            <th>Comentarios</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {inscripciones.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.telefono}</td>
              <td>{item.edad}</td>
              <td>{item.curso}</td>
              <td>{item.nivel}</td>
              <td>{item.fecha_inicio}</td>
              <td>{item.nuevo_ingreso ? "Sí" : "No"}</td>
              <td>{item.comentarios}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => iniciarEdicion(item)}
                >
                  ✏️
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarInscripcion(item.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FORMULARIO DE EDICIÓN */}
      {editId && (
        <div className="card p-4 mt-4 shadow-sm">
          <h4 className="text-center text-primary mb-3">Editar inscripción</h4>

          <form onSubmit={guardarEdicion}>
            <div className="row">

              <div className="col-md-6">
                <label className="fw-bold">Nombre</label>
                <input
                  name="nombre"
                  className="form-control"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="fw-bold">Correo</label>
                <input
                  name="correo"
                  className="form-control"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Teléfono</label>
                <input
                  name="telefono"
                  className="form-control"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Edad</label>
                <input
                  type="number"
                  name="edad"
                  className="form-control"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Curso</label>
                <input
                  name="curso"
                  className="form-control"
                  value={formData.curso}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Nivel</label>
                <input
                  name="nivel"
                  className="form-control"
                  value={formData.nivel}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Fecha Inicio</label>
                <input
                  type="date"
                  name="fecha_inicio"
                  className="form-control"
                  value={formData.fecha_inicio}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label className="fw-bold">Alumno nuevo</label>
                <input
                  type="checkbox"
                  name="nuevo_ingreso"
                  className="form-check-input ms-2"
                  checked={formData.nuevo_ingreso}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mt-3">
                <label className="fw-bold">Comentarios</label>
                <textarea
                  name="comentarios"
                  className="form-control"
                  rows="3"
                  value={formData.comentarios}
                  onChange={handleChange}
                ></textarea>
              </div>

            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success me-2">
                💾 Guardar
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditId(null)}
              >
                ❌ Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}