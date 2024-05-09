import React from 'react';
import Sidebar from '../Sidebar'; 

function RegisterPage() {
  return (
    <div className="register">
      <Sidebar /> {/* Inclua o Sidebar */}
      <section className="register">
        <div className="text">REGISTRO</div>
      </section>
      {/* Outros conteúdos da sua homepage */}
    </div>
  );
}

export default RegisterPage;
