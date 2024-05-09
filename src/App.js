import './App.css'; // Importando os estilos
import { useEffect } from 'react';
import { login, isEmailValid } from './Login'; // Importando as funções de login

function App() {
  useEffect(() => {
    // Inicialize o Firebase aqui, se necessário
  }, []);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input id="email" type="text" onChange={() => isEmailValid()} placeholder="Nome" required />
          <i className='bx bx-user'></i>
        </div>
        <div className="input-box">
          <input id="password" type="password" onChange={() => isEmailValid()} placeholder="Senha" required />
          <i className='bx bx-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" disabled="true" />Salvar usuário</label>
          <a href="#">Recuperar senha?</a>
        </div>
        <button id="button" type="button" className="btn" disabled="true" onClick={() => login()}>Login</button>

        <div className="register-link">
          <p>Não possui conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  );
}

export default App;
