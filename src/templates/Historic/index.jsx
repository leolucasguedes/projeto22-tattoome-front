import { useState, useEffect, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import api from "../../services/api";
import styled from "styled-components";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { BsTrash } from "react-icons/bs";

function Historic() {
  const [budgets, setBudgets] = useState([]);
  const { user } = useContext(userContext);
  const { sendUser } = user;
  const { id, name } = sendUser;

  useEffect(() => {
    const promise = api.get(`/budget/user/${id}`);

    promise.then((response) => {
      const { data } = response;
      setBudgets(data);
    });
    promise.catch((err) => console.log(err.response));
  }, [id]);

  function deleteBudget(id) {
    const promise = api.delete(`/budget/${id}`);
    promise.then(() => {
      window.location.reload(false);
    });
    promise.catch((err) => console.log(err.response));
  }

  return (
    <>
      <Header />
      <Main>
        <DivInfo>
          <h1>Olá {name}, aqui estão seus orçamentos anteriores!</h1>
          {budgets.map((budget, index) => {
            const { id, email, number, description, size } = budget;
            return (
              <Budget key={index}>
                <Trash onClick={() => deleteBudget(id)} />
                <div className="upside">
                  <h1>{email}</h1>
                  <h2>{number}</h2>
                </div>
                <p>{description}</p>
                <h3>{size}</h3>
              </Budget>
            );
          })}
        </DivInfo>
      </Main>
      <Footer />
    </>
  );
}

export default Historic;

export const Main = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-left: 150px;
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

  h1 {
    font-family: brisa-sans;
    font-size: 21px;
    margin-bottom: 40px;
  }
`;

export const Budget = styled.div`
  width: 600px;
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: solid 1px gray;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;

  h1 {
    font-family: oswald;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 11px;
    left: 22px;
  }
  h2 {
    font-family: oswald;
    font-size: 18px;
    position: absolute;
    top: 12px;
    left: 250px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-left: 20px;
    margin-top: 40px;
  }

  h3 {
    font-family: oswald;
    font-size: 16px;
    position: absolute;
    bottom: 10px;
    left: 22px;
  }

  .upside {
    display: flex;
  }
`;

export const Trash = styled(BsTrash)`
  position: absolute;
  top: 10px;
  right: 15px;
  color: #030303;
  font-size: 17px;
  cursor: pointer;
`;
