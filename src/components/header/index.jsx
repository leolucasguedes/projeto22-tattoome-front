import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

import Logo from "./../../assets/imgs/logo.png";

function Header() {
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [nav, setNav] = useState(true);

  useEffect(() => {
    const userNameLocalStorage = localStorage.getItem("name");

    if (userNameLocalStorage) {
      const unserializedName = JSON.parse(userNameLocalStorage);
      setUserName(unserializedName);
      setStatus(true);
    }
  }, []);

  return (
    <>
      <Top>
        {nav ? (
          <>
            <Nav onClick={() => setNav(false)} />
          </>
        ) : (
          <>
            <Close onClick={() => setNav(true)} />
            <MenuNav>
              <Link to={"/gallery"}>
                <h1>Galeria</h1>
              </Link>
              <Link to={"/schedule"}>
                <h1>Agendamento</h1>
              </Link>
              <Link to={"/about"}>
                <h1>Sobre</h1>
              </Link>
              <h1>Depoimentos</h1>
              <h1>Contato</h1>
            </MenuNav>
          </>
        )}
        <Left>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </Left>
        <Center>TattooMeLet</Center>
        <Right>
          <Person />
          {status === false ? (
            <RightName>
              <Link to={"/signin"}>
                <h1>Entrar</h1>
              </Link>
            </RightName>
          ) : (
            <RightName>
              <h1>Olá, {userName}</h1>
            </RightName>
          )}
        </Right>
      </Top>
    </>
  );
}

export default Header;

const Top = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

const Left = styled.div`
  margin-left: 90px;
  position: relative;

  img {
    width: 55px;
    heighr: 55px;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 100px;
  }
`;

const Nav = styled(FiMenu)`
  position: absolute;
  top: 20px;
  left: 32px;
  color: #000000;
  font-size: 28px;
  cursor: pointer;
`;

const Center = styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 14.73px;
  color: #000000;
  text-align: center;
  margin-right: 190px;
`;

const Right = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  margin-right: 20px;
  position: relative;
`;

const Person = styled(BsFillPersonFill)`
  position: absolute;
  top: 6px;
  right: 100px;
  color: #000000;
  font-size: 28px;
  cursor: pointer;
`;

const RightName = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #015584;
    text-align: center;
  }
`;

const MenuNav = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  padding-top: 30px;
  margin-top: 72px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #015584;
    text-align: center;
    margin: 20px 0;
  }
`;

const Close = styled(IoClose)`
  position: absolute;
  top: 20px;
  left: 32px;
  color: #000000;
  font-size: 28px;
  cursor: pointer;
`;
