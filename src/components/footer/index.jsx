import { Link } from "react-router-dom";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";


function Footer() {
  return (
    <>
      <Bot>
        <Div />
        <p>Made By Leonardo Lucas</p>
        <p>part of Driven Bootcamp</p>
      </Bot>
    </>
  );
}

export default Footer;

const Bot = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #efeef3;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    color: #7d9386;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Div = styled.div`
  width: 1500px;
  height: 2px;
  border-radius: 5px;
  background-color: #7d9386;
  margin-top: 10px;
  margin-bottom: 15px;
`;