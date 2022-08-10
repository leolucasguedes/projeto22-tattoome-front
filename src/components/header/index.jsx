import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';

import Logo from "./../../assets/imgs/logo.png";

function Header() {
  const userDataLocalStorage = localStorage.getItem("userData");
  const unserializedData = JSON.parse(userDataLocalStorage);
  const nameStorage = unserializedData.name;
  return (
    <>
      <Top>
        <Left>
          <Nav />
          <img src={Logo} alt="Logo" />
        </Left>
        <Center>TattooMeLet</Center>
        <Right>
          <Person />
          {nameStorage ? (
            <RightName>
              <h1>Olá, {nameStorage}</h1>
            </RightName>
          ) : (
            <RightName>
              <Link to={"/signin"}>
                <h1>Entrar</h1>
              </Link>
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
  z-index: 1;
`;

const Left = styled.div`
  width: 60px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
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