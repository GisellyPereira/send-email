import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import Image from "./componentes/imgs/woman.png";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_xx2gdp2",
        "template_bvpzog3",
        templateParams,
        "WPguzsMv5yNYhkTxQ"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Email não enviado", err);
        }
      );
  }

  return (
    <div className="container">
      <div className="contain-flex">
        <div className="part-right">
          <h1 className="title">Get in Touch</h1>
          <p className="text">We are here for you! How can we help you?</p>

          <form className="form" onSubmit={sendEmail}>
          
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          
          <textarea
            className="textarea"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
        </div>
        

        <div>
          <img className="img" src={Image} alt="Imagem de uma mulher" />
        </div>
      </div>
    </div>
  );
}

export default App;
