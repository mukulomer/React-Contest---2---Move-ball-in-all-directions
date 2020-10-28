import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  let Left = 0;
  let Top = 0;

  const keyPress = (event) => {
    let ballPositioncopy = { ...ballPosition };
    if (event.key === "ArrowRight") {
      Left = Left + 5;
      ballPositioncopy.left = `${Left}px`;
      ballPositioncopy.top = `0px`;
      setBallPosition(ballPositioncopy);
      console.log("move right");
    } else if (event.key === "ArrowLeft") {
      Left = Left - 5;
      ballPositioncopy.left = `${Left}px`;
      ballPositioncopy.top = `0px`;
      setBallPosition(ballPositioncopy);
    } else if (event.key === "ArrowDown") {
      Top = Top + 5;
      ballPositioncopy.left = `0px`;
      ballPositioncopy.top = `${Top}px`;
      setBallPosition(ballPositioncopy);
    } else if (event.key === "ArrowUp") {
      Top = Top - 5;
      ballPositioncopy.left = `0px`;
      ballPositioncopy.top = `${Top}px`;
      setBallPosition(ballPositioncopy);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
  }, []);

  const reset = () => {
    Left = 0;
    Top = 0;
    let ballPositioncopy = { ...ballPosition };
    ballPositioncopy.left = `${Left}px`;
    ballPositioncopy.top = `${Top}px`;
    setBallPosition(ballPositioncopy);
  };
  const handelClick = () => {
    let renderball = true;
    setRenderBall(renderball);
  };

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={handelClick}>
          Start
        </button>
      );
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      <div className="render"> {renderChoice()}</div>
    </div>
  );
};

export default App;
