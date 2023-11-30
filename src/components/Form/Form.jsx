import { useState } from "react";
import "../Form/Formulario.css"
export default function FormPage() {

  const [datosForm, setDatosForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: ''    
  });


  const handleSubmit = (e) => {
    e.preventDefault();    
    alert(JSON.stringify(datosForm, null,2)); 
  };

  const handleConfirm = (e)=>{
    e.preventDefault();
    if(datosForm.password == datosForm.confirmPassword){
      handleSubmit(e);
    }else{
      alert("Los datos no coinciden")
      return false;
    }
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  }; 

  return (
    <>
      <div className="body-form">
        <div className="container-form">
          <h1 className="title-form text-light fw-bold">Registro</h1>
          <form onSubmit={handleConfirm}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" className="form-control" onChange={handleInput} name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" className="form-control" onChange={handleInput} name="apellido" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" onChange={handleInput} name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" className="form-control" onChange={handleInput} name="telefono" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password :</label>
              <input type="password" className="form-control" onChange={handleInput} name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Password :</label>
              <input type="password" className="form-control" onChange={handleInput} name="confirmPassword" required />
            </div>
            <div className="btn-container">
              <button type="reset" className="btn btn-form">Limpiar</button>
              <button type="submit" className="btn btn-form">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
