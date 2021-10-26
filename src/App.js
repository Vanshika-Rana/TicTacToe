import React, {useState}from 'react';
import Icon from './components/Icon';


import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {
  const[isCross, setIsCross] = useState(false);
  const[winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner =() => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray.every((element) => element !== "empty")
    ) {
      setWinMessage("Draw");
    }
  }


  const changeItem = (i) => {
    if(winMessage) {
      return toast(winMessage, {type: "success"});
    }
    if(itemArray[i] === "empty"){
      itemArray[i] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
  } else {
    return toast("This position is occupied", {type: "error"});

  }
  checkIsWinner();
  }

  return (
    <Container className="p-5 mt-5">
      
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        <h1 className="text-warning text-center fs-1 fw-bold text-uppercase">Tic Tac Toe</h1>
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-light fs-2 fw-lighter text-capitalize text-center">
                {winMessage}
                </h1>
              <Button color="warning w-100" block onClick={reloadGame}>
                Play Again
                </Button>
            </div>
          ) : (
            <h1 className="text-center fw-lighter text-capitalize fs-2 text-light">
              {isCross ? "Cross" : "Circle"}'s Turn
            </h1>
          )}

          <div className="grid mt-3">
            {itemArray.map((item, index) => (
              <Card className="tcard" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
