import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Gallery() {
  const [images, setImages] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [etapa, setEtapa] = useState("");

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/images");

    promise.then((response) => {
      const { data } = response;
      setImages(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  useEffect(() => {
    setFiltro([]);
    images.forEach((image) => {
      if (image.type === etapa) {
        setFiltro((prev) => [...prev, image]);
      }
    });
  }, [etapa, images]);

  return (
    <>
      <Header />
      <Main>
        <DivButtons>
          <Button onClick={() => setEtapa("Work")} type="submit">
            Trabalhos
          </Button>
          <Button onClick={() => setEtapa("Flash")} type="submit">
            Flashs
          </Button>
          <Button onClick={() => setEtapa("Art")} type="submit">
            Artes
          </Button>
        </DivButtons>
        <Portfolio>
          {etapa === "" ? (
            <NoPhotos>Bem vindo a galeria!</NoPhotos>
          ) : (
            filtro.map((image) => {
              const { id } = image;
              return <Photos key={id} />;
            })
          )}
        </Portfolio>
      </Main>
      <Footer />
    </>
  );
}

export default Gallery;

export const Main = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 120px;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #4a4a59;
  border: none;
  width: 120px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-family: oswald;
  cursor: pointer;
  margin-top: 50px;
`;

export const DivButtons = styled.div`
  width: 375px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
`;

export const Portfolio = styled.div`
  width: 1075px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 7px;
  padding-bottom: 80px;
`;

export const Photos = styled.img`
  width: 300px;
  height: 400px;
  margin: 50px 80px;
`;

export const NoPhotos = styled.h1`
font-family: millenia;
font-size: 22px;
margin-top: 50px;
margin-left: 420px;
`;
