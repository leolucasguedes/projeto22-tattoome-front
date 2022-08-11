import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Main>
        <Button onClick={() => navigate("/schedule")} type="submit">
          Faça um orçamento!
        </Button>
      </Main>
    </>
  );
}

export default Home;

export const Main = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #4A4A59;
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
  margin-top: 50px;
`;
