import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import logo from "./../../assets/imgs/logoFlower.png";

export default function Signin() {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  function postSignIn(e) {
    setLoading(true);
    e.preventDefault();
    const promise = api.post('/signin', signIn);
    promise.then((res) => {
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setLoading(false);
      navigate("/");
    });
    promise.catch((e) => {
      const message = e.response.data;
      setUser({});
      setLoading(false);
      alert(`Dados inválidos: ${message}`);
    });
  }
  function Button() {
    if (!loading) {
      return <button type="submit">Entrar</button>;
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
        <form onSubmit={postSignIn}>
          <h1>TattooMeLet</h1>
          <img src={logo} alt="Logo" />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
            value={signIn.email}
            required
          ></input>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
            value={signIn.password}
            required
          ></input>
          <Button />
          <Link to="/signup">
            <h3>Primeira vez? Crie uma conta!</h3>
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
      top: 180px;
      right: 160px;
    }
    img {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 155px;
      right: 80px;
    }
    form {
      display: flex;
      margin-top: 40px;
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
      padding-left: 17px;
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
      cursor: pointer;
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
