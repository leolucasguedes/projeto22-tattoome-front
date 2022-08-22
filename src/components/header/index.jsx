import { useState, useEffect, useRef, useContext } from "react";
import userContext from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

import Logo from "./../../assets/imgs/logo.png";

function Header() {
  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState(false);
  const [userName, setUserName] = useState("");
  const [nav, setNav] = useState(true);
  const { userData, setUserData } = useContext(userContext);
  const { userId } = userData;
  const navigate = useNavigate();
  let ref = useRef();

  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    function OutsideClick(e) {
      if (selected && ref.current && !ref.current.contains(e.target)) {
        setSelected(false);
      }
    }
    document.addEventListener("mousedown", OutsideClick);
    return () => {
      document.removeEventListener("mousedown", OutsideClick);
    };
  }, [selected]);

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
              {status === false ? (
            <></>
          ) : (
            <Link to={`/budget/user/${userId}`}>
                <h1>Histórico</h1>
              </Link>
          )}
            </MenuNav>
          </>
        )}
        <Left>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </Left>
        <Center>Tattoo me Let</Center>
        <Right>
          <DivIcon ref={ref}>
            <Person onClick={() => setSelected(!selected)} />
            {selected ? (
              <>
                <ion-icon
                  name="chevron-up-outline"
                  onClick={() => setSelected(!selected)}
                ></ion-icon>
                <div className="log-out" onClick={() => signOut()}>
                  <h3>Sair da conta</h3>
                </div>
              </>
            ) : (
              <ion-icon
                name="chevron-down-outline"
                onClick={() => setSelected(!selected)}
              ></ion-icon>
            )}
          </DivIcon>
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
  font-size: 32px;
  font-family: millenial;
  font-weight: 400;
  font-style: normal;
  line-height: 14.73px;
  color: #000000;
  text-align: center;
  margin-right: 190px;
  margin-top: 3px;
`;

const Right = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  margin-right: 20px;
  position: relative;
`;

const DivIcon = styled.div`
  width: 1px;
  height: 1px;
  display: flex;
  align-items: center;
  background-color: red;
  ion-icon {
    color: white;
    font-size: 26px;
    margin: 16px;
  }
  .log-out {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 47px;
    background-color: #ffffff;
    position: absolute;
    top: 56px;
    right: -20px;
    border-radius: 0 0 20px 20px;
  }
  h3 {
    font-size: 17px;
    color: #000000;
  }
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
  border: solid 1px gray;
  border-radius: 5px;
  margin-left: 10px;

  h1 {
    font-size: 16px;
    font-family: "Anton", sans-serif;
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
    cursor: pointer;
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
