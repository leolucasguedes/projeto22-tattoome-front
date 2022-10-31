import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";

function SlideBox(props) {
  const { slideImages } = props;

  return (
    <ContainerBox>
      {slideImages ? (
        <Slide easing="ease">
          {slideImages.map((slideImage, index) => {
            return <SlideImage style={{'backgroundImage': `url(${slideImage.url})`}} key={index}></SlideImage>;
          })}
        </Slide>
      ) : (
        <></>
      )}
    </ContainerBox>
  );
}

export default SlideBox;

const ContainerBox = styled.div`
  width: 820px;
  height: 420px;
  border: solid 5px #000000;
  border-radius: 6px;
  background-color: #ffffff;
  position: absolute;
  top: 370px;
  right: 450px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const SlideImage = styled.div`
  width: 820px;
  height: 410px;
`;