import styled from "styled-components";

import background from "./../../assets/imgs/background.gif";

export const Background = styled.div`
  width: 1667px;
  height: 100vh;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  position: relative;
  }
`;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
`;

export const SubMain = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 180px;

  h1 {
    font-family: oswald;
    font-size: 22px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #151417;
  border: solid 1px #eef0f4;
  border-radius: 10px;
  width: 429px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-family: oswald;
  font-weight: bold;
  cursor: pointer;
  margin-top: 25px;
`;

export const DivUp = styled.div`
  width: 620px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background-color: #ffffff;
  margin-top: 20px;

  img {
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
  h1 {
    font-family: brisa-sans;
    font-size: 22px;
    margin-top: 10px;
  }
`;

export const NoDivUp = styled.div`
  width: 620px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  margin-top: 20px;
  padding-top: 90px;
`;

export const Div = styled.div`
  width: 50px;
  height: 2px;
  border-radius: 5px;
  background-color: #000000;
  margin-top: 50px;
`;

export const Comment = styled.p`
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

export const ShowSlide = styled.button`
  width: 102px;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #4a4a59;
  border-radius: 20px;
  font-family: quarion;
  position: absolute;
  top: 481px;
  right: 827.5px;
  cursor: pointer;
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  from { opacity: 1.0; }
  50% { opacity: 0.5; }
  to { opacity: 1.0; }
  }
`;

export const DivStars = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 5px;
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
    font-family: oswald;
    font-size: 14px;
    cursor: pointer;
    margin-top: 20px;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    line-height: 18px;
  }
`;
