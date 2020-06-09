import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

interface Location {
  state: {
    name: string;
  }
}

interface SMS {
  id: number;
  name: string;
  sms: string;
}

const Home: React.FC = () => {
  const location = useLocation() as Location;

  const [SMS, setSMS] = useState('');
  const [sentSMS, setSentSMS] = useState<SMS[]>([]);

  useEffect(() => {
    if (SMS === '')
      api.get('/sms').then(response => {
        setSentSMS(response.data);
      });
  }, [SMS]);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const submitSMS = event.target.value;

    setSMS(submitSMS);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name } = location.state;

    api.post('/sms', { name, sms: SMS }).then(() => {
      setSMS('');
    });
  }

  return (
    <div id="wrapper-home">
      <h1>INFORMA+</h1>

      <div id="send-message">
        <p>Digite o SMS, revise com cuidado antes de enviar!</p>

        <form onSubmit={handleSubmit} id="sms-form">
          <textarea
            name="sms"
            id="sms"
            placeholder="Digite aqui o SMS"
            onChange={handleInputChange}
          />
          <button type="submit">Enviar SMS</button>
        </form>
      </div>

      <div id="sent-sms">
        <p>Todos os SMS enviados:</p>

        <div>
          {sentSMS.map((sent: SMS) => (
            <span key={sent.id}>{sent.sms}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
