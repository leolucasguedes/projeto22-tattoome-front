import { useState } from "react";
import api from "../../services/api";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { IoClose } from "react-icons/io5";

function CreateDepositionBox(props) {
  const { setCreateBox, user } = props;
  const { sendUser } = user;
  const { token, id, name } = sendUser;
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [deposition, setDeposition] = useState({
    stars: 0,
    text: "",
    username: name,
    userId: id,
  });

  const handleRating = (rate) => {
    setRating(rate);
    setDeposition({ ...deposition, stars: rate });
  };

  function sendDeposition(e) {
    setLoading(true);
    e.preventDefault();
    const promise = api.post('/deposition', deposition, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then((res) => {
      setLoading(false);
      setCreateBox(false);
      window.location.reload(false);
    });
    promise.catch((e) => {
      const message = e.response.data;
      setLoading(false);
      alert(`Dados inválidos: ${message}`);
    });
  }

  function Button() {
    if (!loading) {
      return <button type="submit">Postar</button>;
    }
    if (loading) {
      return (
        <button>
          <div className="loading" />
        </button>
      );
    }
  }

  return (
    <>
      <Box>
        <Close onClick={() => setCreateBox(false)} />
        <form onSubmit={sendDeposition}>
          <DivStars>
            <Rating onClick={handleRating} ratingValue={rating} />
          </DivStars>
          <DivInputs>
            <textarea
              type="text"
              placeholder="Escreva aqui..."
              onChange={(e) =>
                setDeposition({ ...deposition, text: e.target.value })
              }
              value={deposition.text}
              required
            ></textarea>
            <Input
              type="text"
              placeholder="Nome"
              onChange={(e) =>
                setDeposition({ ...deposition, username: e.target.value })
              }
              value={deposition.username}
              required
            ></Input>
            <Button />
          </DivInputs>
        </form>
      </Box>
    </>
  );
}

export default CreateDepositionBox;

export const Box = styled.main`
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #000000;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  margin-top: 30px;
  z-index: 2;
`;

export const DivStars = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-left: 140px;
`;

export const DivInputs = styled.div`
  width: 570px;
  height: 269px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  textarea {
    width: 470px;
    height: 125px;
    border: solid 1px #efeef3;
    border-radius: 6px;
    resize: none;
    padding: 4px 8px;
    margin: 15px 0px;
    font-size: 17px;
    font-family: oswald;
    ::placeholder {
      padding-left: 17px;
      padding-top: 10px;
    }
  }

  button {
    color: #ffffff;
    background-color: #288eed;
    border: none;
    width: 200px;
    height: 65px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: oswald;
    cursor: pointer;
    margin-top: 50px;
    margin-right: 30px;
  }
  .loading {
    animation: is-rotating 1s infinite;
    width: 25px;
    height: 25px;
    border: 4px solid #1877f2;
    border-top-color: #ffffff;
    border-radius: 50%;
    margin: 15px;
  }
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
`;

export const Input = styled.input`
  width: 300px;
  height: 55px;
  border: solid 1px #efeef3;
  border-radius: 6px;
  margin: 15px 0px;
  font-size: 17px;
  font-family: oswald;
  ::placeholder {
    padding-left: 17px;
  }
`;

const Close = styled(IoClose)`
  position: absolute;
  top: 20px;
  left: 32px;
  color: #000000;
  font-size: 28px;
  cursor: pointer;
`;
