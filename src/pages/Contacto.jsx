function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Cuéntanos ¿En que te podemos ayudar?</h1>
      <div className="form-container">
        <label htmlFor="">Correo:</label>
        <input type="text" placeholder="name@example.com" />
        <label htmlFor="">Descripción:</label>
        <textarea></textarea>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Contacto;
