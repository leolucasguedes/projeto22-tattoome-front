import styled from "styled-components";
import React from "react";
import Upload from "../fileBox";
import FileList from "../fileList";

function ContainerBox() {
  return (
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  );
}

export default ContainerBox;

export const Container = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;
