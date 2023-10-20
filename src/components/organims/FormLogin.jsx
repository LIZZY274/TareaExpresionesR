import React from "react";
import { useState } from "react";
import Write from "../molecules/Write";
import Button from "../atoms/Button";
import Check from "../molecules/Check";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Expresión regular para validar una dirección de correo electrónico
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  // Expresión regular para validar la contraseña (al menos 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.match(emailRegex) && password.match(passwordRegex)) {
      // Realizar la lógica de autenticación aquí (por ejemplo, enviar una solicitud al servidor).
      // Si la autenticación es exitosa, puedes redirigir al usuario o realizar otras acciones.
      // Por ahora, simplemente mostraremos una alerta.
      setShowAlert(true);
    } else {
      setShowAlert(false);
      alert("Por favor, complete todos los campos correctamente.");
    }
  };

  return (
    <>
      <div id="page" class="site login-show">
        <div class="container">
          <div class="wrapper">
            <div class="login">
              <div class="content-from">
                <div class="y-style">
                  <form action="" onSubmit={handleSubmit}>
                    <p>
                      <Write labelText="Email" type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </p>
                    <p>
                      <Write labelText="Password" type="password" value={password} placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                    </p>
                    <p class="check">
                      <Check type="checkbox" id="remember" htmlFor="remember" textLabel="Remember" />
                    </p>
                    <p class="forgot">
                      <a href="#">Forgot password</a>
                    </p>
                    <p>
                      <Button type="submit" textButton="Login" />
                    </p>
                  </form>
                  <div class="afterform">
                    <p>Don't have an account?</p>
                    <a href="#" class="t-signup">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="alert alert-success">
          <p>Login successful! Redirecting...</p>
        </div>
      )}
    </>
  );
}

export default FormLogin;
