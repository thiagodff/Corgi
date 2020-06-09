import React, { FormEvent, ChangeEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

const Login: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const submitName = event.target.value;

    setName(submitName);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    history.push('/', { name });
  }

  return (
    <div id="wrapper">
      <div id="login-wrapper">
        <h1>INFORMA+</h1>

        <form onSubmit={handleSubmit} id="login-form">
          <strong>SEU E-MAIL</strong>
          <input
            name="text"
            type="text"
            placeholder="exemplo@email.com"
            onChange={handleInputChange}
          />
          <strong>SUA SENHA</strong>
          <input name="password" type="password" placeholder="********" />

          <button type="submit">Entrar</button>
          <Link to="/recuperacao-senha">Esqueci minha senha</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
