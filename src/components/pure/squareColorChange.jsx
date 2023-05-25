import React, { useState, useRef, useEffect } from "react";

const useGenerateRandomColor = () => {
  //const [color,setColor] = useState("")
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const generateColor = () => {
    setRed(Math.random() * 256);
    setBlue(Math.random() * 256);
    setGreen(Math.random() * 256);
  };
  return { red, green, blue, generateColor, setBlue, setGreen, setRed };
};

const Square = () => {
  const { red, green, blue, setRed, setGreen, setBlue, generateColor } =
    useGenerateRandomColor();
  const [isRunning, setIsRunning] = useState(false);
  // You don't need 2 variable for this
  //const [isClicked, setClicked] = useState(false);

  // Using `useRef` to store a reference to the interval
  const myInterval = useRef();

  useEffect(() => {
    // You had this line to start timer on load
    // but you can just set the initial state to `true`
    //setFlag(true);
    // Clear time on component dismount
    return () => clearInterval(myInterval.current);
  }, []);

  // useEffect that start/stop interval on flag change
  useEffect(() => {
    if (isRunning) {
      myInterval.current = setInterval(
        () => {
          generateColor()
        },
        1000
      );
    } else {
      clearInterval(myInterval.current);
      myInterval.current = null;
    }
  }, [isRunning]);

  // Now on click you only change the flag
  function toggleTimer() {
    setIsRunning((isRunning) => !isRunning);
    console.log(isRunning)
  }

  

  //let interval;

  /* const colorInterval = (e) => {
    const interval = setInterval(() => {
      generateColor();
    }, 1000);
    return () => {
      clearInterval(interval);
      interval = null;
    };
  }; */

  return (
    <div
      style={{
        width: "255px",
        height: "255px",
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
      onMouseEnter={()=>{
        setIsRunning(true)
      }
        
      
                 //interval = setInterval(generateColor, 1000);
      }
      onMouseLeave={() => {
        //clearInterval(interval);
        //console.log(red, blue, green);
        setIsRunning(false);
        setRed(red);
        setBlue(green);
        setGreen(blue);
        //console.log(red, green, blue);
      }}

      onDoubleClick={()=>{
        setIsRunning(false)
      }
        
      }
    ></div>
  );
};

const SquareColorChange = () => {
  return (
    <div>
      <Square></Square>
    </div>
  );
};

export default SquareColorChange;
