import styled from "styled-components";
import Header from "../../components/header";

function Historic(){
    return(
        <>
        <Header />
        <Main>
            <DivInfo>
              <DivHistoric>
              
              </DivHistoric>
            </DivInfo>
        </Main>
        </>
    )
};

export default Historic;

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

export const DivHistoric = styled.div`
  width: 400px;
  height: 100px;
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