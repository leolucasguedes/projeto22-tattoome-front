import { useState, useEffect, useRef, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as stylized from "./style.js";
import Logo from "./../../assets/imgs/logo.png";

function Header() {
  const [selected, setSelected] = useState(false);
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { sendUser } = user;
  const { id, name } = sendUser;
  let ref = useRef();

  function signOut() {
    localStorage.removeItem("user");
    navigate("/signin");
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

  return (
    <>
      <stylized.Top>
        {nav ? (
          <>
            <stylized.Nav onClick={() => setNav(false)} />
          </>
        ) : (
          <>
            <stylized.Close onClick={() => setNav(true)} />
            <stylized.MenuNav>
              <Link to={"/"}>
                <stylized.HomeIc />
                <h1>Home</h1>
              </Link>
              <Link to={"/gallery"}>
                <stylized.GalleryIc />
                <h1>Galeria</h1>
              </Link>
              <Link to={"/schedule"}>
                <stylized.ScheduleIc />
                <h1>Agendamento</h1>
              </Link>
              <Link to={"/about"}>
                <stylized.AboutIc />
                <h1>Sobre</h1>
              </Link>
              {user ? (
                <Link to={`/budget/user/${id}`}>
                  <stylized.HistoricIc />
                  <h1>Histórico</h1>
                </Link>
              ) : (
                <></>
              )}
            </stylized.MenuNav>
          </>
        )}
        <stylized.Left>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </stylized.Left>
        <stylized.Center>Tattoo me Let</stylized.Center>
        <stylized.Right>
          <stylized.Person onClick={() => setSelected(!selected)} />
            {selected ? (
              <>
                <stylized.Less onClick={() => setSelected(!selected)} /> 
                <stylized.Logout onClick={() => signOut()}>
                <stylized.GoOut onClick={() => setSelected(!selected)} />
                  <h3>Sair da conta</h3>
                </stylized.Logout>
              </>
            ) : (
              <stylized.More onClick={() => setSelected(!selected)} />
            )}
          {user ? (
            <stylized.RightName>
              <h1>Olá, {name}</h1>
            </stylized.RightName>
          ) : (
            <stylized.RightName>
              <Link to={"/signin"}>
                <h1>Entrar</h1>
              </Link>
            </stylized.RightName>
          )}
        </stylized.Right>
      </stylized.Top>
    </>
  );
}

export default Header;
