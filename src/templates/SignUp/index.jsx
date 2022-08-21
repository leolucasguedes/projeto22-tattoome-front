import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const POSTURL = "http://localhost:5000/signup";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function postSignUp(e) {
    setLoading(true);
    e.preventDefault();
    const promise = axios.post(POSTURL, signUp);
    promise.then((res) => {
      setLoading(false);
      navigate("/signin");
    });
    promise.catch((e) => {
      const message = e.response.data;
      setLoading(false);
      alert(`Dados inválidos: ${message}`);
    });
  }

  function Button() {
    if (!loading) {
      return <button type="submit">Cadastre-se</button>;
    }
    if (loading) {
      return (
        <button>
          <div className="loading" />
        </button>
      );
    }
  }

  return (
    <Main>
      <div className="form-box">
        <form onSubmit={postSignUp}>
          <h1>TattooMeLet</h1>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setSignUp({ ...signUp, username: e.target.value })}
            value={signUp.username}
            required
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            value={signUp.email}
            required
          ></input>
          <input
            type="password"
            placeholder="Senha de 8 ou mais caracteres"
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
            value={signUp.password}
            required
          ></input>
          <input
            type="text"
            placeholder="Confirme a senha"
            onChange={(e) =>
              setSignUp({ ...signUp, confirmPassword: e.target.value })
            }
            value={signUp.confirmPassword}
            required
          ></input>
          <Button />
          <Link to="/signin">
            <h3>Voltar para o login</h3>
          </Link>
          <Link to="/">
            <h3>Voltar para Home</h3>
          </Link>
        </form>
      </div>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333333;
  display: flex;
  justify-content: center;
  .form-box {
    background-color: #efeef3;
    height: 100%;
    width: 535px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
      color: #000000;
      font-size: 46px;
      font-family: millenial;
      position: absolute;
      top: 170px;
      right: 160px;
    }
    form {
      display: flex;
      margin-top: 100px;
      flex-direction: column;
    }
    input {
      width: 429px;
      height: 65px;
      border: none;
      border-radius: 6px;
      margin-bottom: 13px;
      font-size: 27px;
      font-family: oswald;
      padding-left: 15px;
    }
    input::placeholder {
      padding-left: 17px;
    }
    button {
      color: white;
      background-color: #1877f2;
      border: none;
      width: 429px;
      height: 65px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 27px;
      font-family: oswald;
    }
    .loading {
      animation: is-rotating 1s infinite;
      width: 25px;
      height: 25px;
      border: 4px solid #1877f2;
      border-top-color: #ffffff;
      border-radius: 50%;
      margin: 15px;
    }
    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
    h3 {
      font-family: lato;
      text-decoration: underline;
      color: #000000;
      text-align: center;
      margin-top: 14px;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .form-box {
      position: relative;
      width: 100%;
      align-items: baseline;
      form {
        margin-top: 40px;
      }
      input {
        width: 330px;
        height: 55px;
        font-size: 22px;
      }
      button {
        width: 330px;
        height: 55px;
        font-size: 22px;
      }
    }
  }
`;
