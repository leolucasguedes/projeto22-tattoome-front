import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { budgetContext } from "../../contexts/budgetContext";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContainerBox from "../../components/containerBox";

function Schedule() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
 
  let userId = "";
  if (user) {
    userId = user.sendUser.id;
  }
  
  const [loading, setLoading] = useState(false);
  const { budget, setBudget } = useContext(budgetContext);
  const budgetDone = {
    name: budget.name,
    email: budget.email,
    number: budget.number,
    description: budget.description,
    size: budget.size,
    userId: userId,
  }
 
  function sendBudget(e) {
    setLoading(true);
    e.preventDefault();
    const promise = api.post('/budget', budgetDone);
    promise.then((res) => {
      setLoading(false);
      navigate("/");
    });
    promise.catch((e) => {
      const message = e.response.data;
      setLoading(false);
      alert(`Dados inválidos: ${message}`);
    });
  }

  function Button() {
    if (!loading) {
      return <button type="submit">Tudo certo. Pode enviar!</button>;
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
    <>
      <Header />
      <Main>
        <Welcome>
          Vamos fazer um orçamento? Preencha as informações abaixo para eu saber
          o máximo sobre a tatuagem e envie referências se tiver!
        </Welcome>

        <form onSubmit={sendBudget}>
          <DivInputs>
            <Input
              type="text"
              placeholder="Nome"
              onChange={(e) =>
                setBudget({ ...budget, name: e.target.value }) 
              }
              value={budget.name}
              required
            ></Input>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) =>
                setBudget({ ...budget, email: e.target.value })
              }
              value={budget.email}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Telefone para contato"
              onChange={(e) =>
                setBudget({ ...budget, number: e.target.value })
              }
              value={budget.number}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Descrição"
              onChange={(e) =>
                setBudget({ ...budget, description: e.target.value })
              }
              value={budget.description}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Tamanho"
              onChange={(e) =>
                setBudget({ ...budget, size: e.target.value })
              }
              value={budget.size}
              required
            ></Input>
            <ContainerBox />
            <Button />
          </DivInputs>
        </form>
      </Main>
      <Footer />
    </>
  );
}

export default Schedule;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-right: 20px;
  margin-bottom: 80px;
  margin-left: 150px;
`;

export const DivInputs = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7px;
  padding-bottom: 80px;
  margin-top: 40px;
  margin-right: 80px;

  button {
    color: #ffffff;
    background-color: #4661ED;
    border: none;
    width: 300px;
    height: 65px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: oswald;
    cursor: pointer;
    margin-top: 50px;
    margin-right: 30px;
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
`;

export const Input = styled.input`
  width: 429px;
  height: 65px;
  border: none;
  border-radius: 6px;
  margin: 15px 0px;
  font-size: 24px;
  font-family: formular;
  ::placeholder {
    padding-left: 17px;
  }
`;

export const Welcome = styled.h1`
  width: 570px;
  font-size: 22px;
  text-align: center;
  margin-top: 50px;
  margin-right: 50px;
`;
