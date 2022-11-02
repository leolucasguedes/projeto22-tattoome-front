import { useState, useEffect, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import styled from "styled-components";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header";
import CreateDepositionBox from "../../components/createDeposition";
import SlideBox from "../../components/slideBox";
import Logo from "./../../assets/imgs/logo.png";
import Footer from "../../components/footer";
import * as stylized from "./style.js";
import { AiFillStar } from "react-icons/ai";
import image1 from "./../../assets/imgs/IMG1.jpg";
import image2 from "./../../assets/imgs/IMG2.jpg";
import image3 from "./../../assets/imgs/IMG3.jpg";

function Home() {
  const [createBox, setCreateBox] = useState(false);
  const [slide, setSlide] = useState(false);
  const [square, setSquare] = useState(false);
  const [logged, setLogged] = useState(false);
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
      setLogged(true);
    }
  }, []);

  useEffect(() => {
    const promise = api.get("/deposition");

    promise.then((response) => {
      const { data } = response;
      setTestimonials(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  function deleteDeposition(id) {
    const { sendUser } = user;
    const { token } = sendUser;
    const promise = api.delete(`/deposition/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    promise.then(() => {
      window.location.reload(false);
    });
    promise.catch((err) => console.log(err.response));
  }

  function renderStars(stars) {
    if(stars === 20)  return <Star />
    if(stars === 40)  return <> <Star /> <Star /> </>
    if(stars === 60)  return <> <Star /> <Star /> <Star /> </>
    if(stars === 80)  return <> <Star /> <Star /> <Star /> <Star /> </>
    if(stars === 100) return <> <Star /> <Star /> <Star /> <Star /> <Star /> </>
  }

  return (
    <>
      <Header />
      <stylized.Background>
        <stylized.Main>
          {square ? (
            <stylized.DivUp>
              <img src={Logo} alt="Logo" />
              <h1>Venha fazer sua tattoo com quem ama a arte!</h1>
              <stylized.Button
                onClick={() => navigate("/schedule")}
                onMouseOut={() => setSquare(false)}
                type="submit"
              >
                Faça um orçamento!
              </stylized.Button>
            </stylized.DivUp>
          ) : (
            <stylized.NoDivUp>
              <stylized.Button
                onMouseOver={() => setSquare(true)}
                type="submit"
              >
                Faça um orçamento!
              </stylized.Button>
            </stylized.NoDivUp>
          )}
          {slide ? (
            <SlideBox slideImages={slideImages} />
          ) : (
            <stylized.ShowSlide onClick={() => setSlide(true)}>
              Clique para ver as novidades!
            </stylized.ShowSlide>
          )}
        </stylized.Main>
      </stylized.Background>
      <stylized.SubMain>
        <stylized.Div />
        <h1>Depoimentos</h1>
        <stylized.DivDepositions>
          {testimonials ? (
            testimonials.map((testimonial, index) => {
              const { id, stars, text, username, userId } = testimonial;
              if (user !== null && user.sendUser.id === userId) {
                return (
                  <stylized.Depositions key={index}>
                    <stylized.DivStars>{renderStars(stars)}</stylized.DivStars>
                    <stylized.Trash onClick={() => deleteDeposition(id)} />
                    <p>{text}</p>
                    <h1> - {username}</h1>
                  </stylized.Depositions>
                );
              } else {
                return (
                  <stylized.Depositions key={index}>
                    <stylized.DivStars>{renderStars(stars)}</stylized.DivStars>
                    <p>{text}</p>
                    <h1> - {username}</h1>
                  </stylized.Depositions>
                );
              }
            })
          ) : (
            <></>
          )}
        </stylized.DivDepositions>
        {logged ? (
          <>
            <stylized.Comment onClick={() => setCreateBox(true)}>
              Escreva um comentário
            </stylized.Comment>
          </>
        ) : (
          <></>
        )}
        <stylized.Div />
        {createBox ? (
          <>
            <CreateDepositionBox setCreateBox={setCreateBox} user={user} />
          </>
        ) : (
          <></>
        )}
        <stylized.More>
          <stylized.Box>
            <h1>Contato</h1>
            <a
              href="https://wa.me/5521981698136"
              target="_blank"
              rel="noreferrer"
            >
              <button>Enviar Mensagem</button>
            </a>
            <p>(21) 98169-8136</p>
          </stylized.Box>
          <stylized.Box>
            <h1>Endereço</h1>
            <a
              href="https://www.google.com.br/maps/place/R.+Nossa+Sra.+das+Merc%C3%AAs,+185+-+Fonseca,+Niter%C3%B3i+-+RJ,+24130-050/@-22.878866,-43.1051991,17z/data=!3m1!4b1!4m5!3m4!1s0x998383f60cde91:0x7cc67e0418fb5ee5!8m2!3d-22.878866!4d-43.1030104"
              target="_blank"
              rel="noreferrer"
            >
              <button>Ver Rotas</button>
            </a>
            <p>R. Nossa Senhora das Mercês 185 - apto 812 - Fonseca</p>
            <p>Rio de Janeiro - RJ</p>
            <p>24130-050</p>
          </stylized.Box>
          <stylized.Box>
            <h1>Horário de Funcionamento</h1>
            <p>segunda: 08:00 - 18:00</p>
            <p>terça: 08:00 - 18:00</p>
            <p>quarta: 08:00 - 18:00</p>
            <p>quinta: 08:00 - 18:00</p>
            <p>sexta: 08:00 - 18:00</p>
            <p>sábado: 10:00 - 17:00</p>
            <p>domingo: 10:00 - 14:00</p>
          </stylized.Box>
        </stylized.More>
      </stylized.SubMain>
      <Footer />
    </>
  );
}

export default Home;

const Star = styled(AiFillStar)`
  color: #fbbc2a;
  font-size: 18px;
  margin: 0 2px;
`;
