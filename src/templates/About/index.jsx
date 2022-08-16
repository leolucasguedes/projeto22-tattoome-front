import styled from "styled-components";
import Header from "../../components/header";
import { textAbout, textPlace } from "./text";

import Artist from "./../../assets/imgs/artist.png";

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
            <Banner />
        </Main>
        </>
    )
};

export default About;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p{
    font-size: 14px;
    margin-left: 20px;
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

const Banner = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
  margin-top: -130px;
  margin-bottom: 100px;
  margin-right: 80px;
`;