import styled from "styled-components";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { textAbout, textPlace } from "./text";

import Artist from "./../../assets/imgs/artist.png";
import Insta from "./../../assets/imgs/insta.jpg";

function About(){
    return(
        <>
        <Header />
        <Main>
            <DivInfo>
              <DivPerson>
              <img src={Artist} alt="Artist" />
                <p>about the artist - {textAbout}</p>
              </DivPerson>
              <DivPlace>
                <p>all about the place, the history and the job - {textPlace}</p>
              </DivPlace>
            </DivInfo>
            <a href="https://www.instagram.com/tattoomelet/" target="_blank" rel="noreferrer">
            <img src={Insta} alt="Instagram" />
            </a>
        </Main>
        <Footer />
        </>
    )
};

export default About;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 120px;

  img {
    width: 300px;
    height: 350px;
    border-radius: 6px;
    margin-top: -130px;
    margin-bottom: 100px;
    margin-right: 80px;
    cursor: pointer;
  }
`;

export const DivInfo = styled.div`
  width: 500px;
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  margin-left: 7px;
  margin-top: 40px;
  margin-right: 80px;
`;

export const DivPerson = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  margin-left: 7px;
  margin-bottom: 50px;

  img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-top: 40px;
  }

  p{
    font-size: 14px;
    line-height: 20px;
  }
`;

export const DivPlace = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-left: 7px;

  p{
    font-size: 14px;
    line-height: 18px;
  }
`;