import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos');
      return;
    };

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send('service_xx2gdp2', 'template_bvpzog3', templateParams, 'WPguzsMv5yNYhkTxQ')
    .then((response) =>{
      console.log('email enviado', response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
    },(err) =>{
      console.log('Email não enviado', err);
    })
  }

  return (
    <div>
    <div className="container">
      <h1 className="title">CONTATO</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
    </div>
  );
}

export default App;
