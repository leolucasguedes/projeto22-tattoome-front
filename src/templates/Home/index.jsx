import { useState, useEffect, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header";
import CreateDepositionBox from "../../components/createDeposition";
import SlideBox from "../../components/slideBox";
import Logo from "./../../assets/imgs/logo.png";
import { AiFillStar } from "react-icons/ai";
import Footer from "../../components/footer";

import image1 from "./../../assets/imgs/IMG1.jpg";
import image2 from "./../../assets/imgs/IMG2.jpg";
import image3 from "./../../assets/imgs/IMG3.jpg";

function Home() {
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [createBox, setCreateBox] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const slideImages = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
  ];

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");

    if (userLocalStorage) {
      const userInfo = JSON.parse(userLocalStorage);
      const { sendUser } = userInfo;
      const { name } = sendUser;
      setUserName(name);
      setStatus(true);
    }
  }, []);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/deposition");

    promise.then((response) => {
      const { data } = response;
      setTestimonials(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <DivUp>
          <img src={Logo} alt="Logo" />
          <h1>Venha fazer sua tattoo com quem ama a arte!</h1>
          <Button onClick={() => navigate("/schedule")} type="submit">
            Faça um orçamento!
          </Button>
        </DivUp>
        <SlideBox slideImages={slideImages} />
        <Div />
        <h1>Depoimentos</h1>
        <DivDepositions>
          {testimonials ? (
            testimonials.map((testimonial) => {
              const { stars, text, username } = testimonial;
              return (
                <Depositions>
                  <DivStars>
                  {stars === 100 ? (
                    <>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    </>
                    ) : (
                      <>
                    for (let i = 0; i = {stars}; i++){
                      <Star />
                      }
                    </>
                    )}
                  </DivStars>
                  <p>{text}</p>
                  <h1> - {username}</h1>
                </Depositions>
              );
            })
          ) : (
            <></>
          )}
        </DivDepositions>
        {status === false ? (
          <></>
        ) : (
          <>
            <Comment onClick={() => setCreateBox(true)}>
              Escreva um comentário
            </Comment>
          </>
        )}
        <Div />
        {createBox ? (
          <>
            <CreateDepositionBox
              setCreateBox={setCreateBox}
              username={userName}
            />
          </>
        ) : (
          <></>
        )}
        <More>
          <Box>
            <h1>Contato</h1>
            <a href="https://wa.me/5521981698136" target="_blank" rel="noreferrer">
              <button>Enviar Mensagem</button>
            </a>
            <p>(21) 98169-8136</p>
          </Box>
          <Box>
            <h1>Endereço</h1>
            <a
              href="https://www.google.com.br/maps/place/R.+Nossa+Sra.+das+Merc%C3%AAs,+185+-+Fonseca,+Niter%C3%B3i+-+RJ,+24130-050/@-22.878866,-43.1051991,17z/data=!3m1!4b1!4m5!3m4!1s0x998383f60cde91:0x7cc67e0418fb5ee5!8m2!3d-22.878866!4d-43.1030104"
              target="_blank" rel="noreferrer"
            >
              <button>Ver Rotas</button>
            </a>
            <p>R. Nossa Senhora das Mercês 185 - apto 812 - Fonseca</p>
            <p>Rio de Janeiro - RJ</p>
            <p>24130-050</p>
          </Box>
          <Box>
            <h1>Horário de Funcionamento</h1>
            <p>seg.: 08:00 - 18:00</p>
            <p>ter.: 08:00 - 18:00</p>
            <p>qua.: 08:00 - 18:00</p>
            <p>qui.: 08:00 - 18:00</p>
            <p>sex.: 08:00 - 18:00</p>
            <p>sab.: 10:00 - 17:00</p>
            <p>dom.: 10:00 - 14:00</p>
          </Box>
        </More>
      </Main>
      <Footer />
    </>
  );
}

export default Home;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 120px;

  img {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
  h1 {
    font-family: oswald;
    font-size: 22px;
  }
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #4a4a59;
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
  margin-top: 30px;
`;

const DivUp = styled.div`
  width: 620px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background-color: #ffffff;
  margin-top: 30px;

  h1 {
    font-family: oswald;
    font-size: 22px;
    margin-top: 5px;
  }
`;

export const Div = styled.div`
  width: 50px;
  height: 2px;
  border-radius: 5px;
  background-color: #000000;
  margin-top: 50px;
`;

export const Comment = styled.p`
  font-family: "Open Sans", sans-serif;
  color: blue;
  font-size: 16px;
  text-decoration: underline;
  margin-top: -50px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const DivDepositions = styled.div`
  width: 940px;
  height: 220px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
  overflow-x: scroll;
`;

export const Depositions = styled.div`
  width: 310px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2px;

  p {
    font-size: 14px;
    margin-top: 25px;
    line-height: 18px;
  }
  h1 {
    color: #4a4a59;
    font-family: oswald;
    font-size: 16px;
    margin-top: 25px;
  }
`;

export const DivStars = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const Star = styled(AiFillStar)`
  color: #fbbc2a;
  font-size: 18px;
  margin: 0 2px;
`;

export const More = styled.div`
  width: 820px;
  height: 210px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
`;

export const Box = styled.div`
  width: 240px;
  height: 210px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  h1 {
    font-family: oswald;
    font-size: 20px;
    margin-top: 5px;
  }
  button {
    color: #ffffff;
    background-color: #4a4a59;
    border: none;
    width: 129px;
    height: 35px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: oswald;
    cursor: pointer;
    margin-top: 20px;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    line-height: 18px;
  }
`;
