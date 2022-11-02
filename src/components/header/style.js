import styled from "styled-components";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { RiHome4Line, RiGalleryFill } from "react-icons/ri";
import { AiFillSchedule } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import {
  MdOutlineMoreTime,
  MdEmojiPeople,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
} from "react-icons/md";

export const Top = styled.header`
  width: 100%;
  height: 70px;
  background-color: #eef0f4;
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

export const Left = styled.div`
  margin-left: 90px;
  position: relative;

  img {
    width: 55px;
    height: 55px;
    border-radius: 5px;
    margin-top: 4px;
    margin-bottom: 5px;
    margin-left: 100px;
  }
`;

export const Nav = styled(FiMenu)`
  position: absolute;
  top: 20px;
  left: 32px;
  color: #000000;
  font-size: 28px;
  cursor: pointer;
`;

export const Center = styled.h1`
  font-size: 32px;
  font-family: millenial;
  font-weight: 400;
  font-style: normal;
  line-height: 14.73px;
  color: #000000;
  text-align: center;
  margin-right: 110px;
  margin-top: 3px;
`;

export const Right = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  margin-right: 20px;
  position: relative;
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 47px;
  background-color: #ffffff;
  position: absolute;
  top: 60px;
  right: 15px;
  border-radius: 10px;

  h3 {
    font-size: 16px;
    font-family: quarion;
    color: #000000;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const Person = styled(BsFillPersonFill)`
  position: absolute;
  top: 8px;
  right: 200px;
  color: #030303;
  font-size: 25px;
  cursor: pointer;
`;

export const RightName = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;

  h1 {
    font-size: 15px;
    font-family: news-gothic;
    font-weight: 400;
    font-style: normal;
    line-height: 14.73px;
    color: #030303;
    text-align: center;
    margin-left: 10px;
    margin-top: 3px;
  }
`;

export const MenuNav = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: #1e1e1e;
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
    font-family: quarion;
    line-height: 14.73px;
    color: #ffffff;
    margin: 20px 0;
    margin-left: 75px;
    cursor: pointer;
  }
`;

export const Close = styled(IoClose)`
  position: absolute;
  top: 20px;
  left: 32px;
  color: #000000;
  font-size: 24px;
  cursor: pointer;
`;

export const HomeIc = styled(RiHome4Line)`
  position: absolute;
  top: 44px;
  left: 40px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const GalleryIc = styled(RiGalleryFill)`
  position: absolute;
  top: 99px;
  left: 40px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const ScheduleIc = styled(MdOutlineMoreTime)`
  position: absolute;
  top: 153px;
  left: 40px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const AboutIc = styled(MdEmojiPeople)`
  position: absolute;
  top: 206px;
  left: 40px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const HistoricIc = styled(AiFillSchedule)`
  position: absolute;
  top: 263px;
  left: 41px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const More = styled(MdOutlineExpandMore)`
  position: absolute;
  top: 8px;
  right: 25px;
  background-color: ${props => props.selected ? "#A09FA2" : ""};
  border-radius: 50%;
  padding: 5px;
  color: #030303;
  font-size: 29px;
  cursor: pointer;
`;

export const Less = styled(MdOutlineExpandLess)`
  position: absolute;
  top: 10px;
  right: 25px;
  color: #030303;
  font-size: 24px;
  cursor: pointer;
`;

export const GoOut = styled(BiLogOut)`
  position: absolute;
  top: 12px;
  right: 131px;
  color: #030303;
  font-size: 20px;
  cursor: pointer;
`;
