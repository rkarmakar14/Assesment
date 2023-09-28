import React, { useEffect, useState } from "react";
import "./Box2.css";
//react countdown-circle-timer imported
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
//create a function to apply the changes
export default function Box2(props) {
  const [count, setcount] = useState({timeValue:props.timeValue});
  const [play, setPlay] = useState(false)
//fetching data and updating the DOM and timer which would depend upon two parameter 1.count, and 2.fetching the data from app.jsx
 useEffect(() => {
    if (props.allowSpeak) {
      if (play === false) {
        setPlay(true)
        // console.log("setPlay:",play)
      }
    }
    // decreasing the time until it turns into 0
    if (props.allowSpeak) {
      const timer = setInterval(() => {
        // console.log("seconds ", count.timeValue);
        let temp = count.timeValue-1;
        setcount((count) =>{return {...count, timeValue:temp}})
        // console.log("Updated seconds ", count.timeValue);
      }, 1000);

    // stopping the countdown when value turn into 0
      if (count.timeValue == 0) {
        clearInterval(timer);
        setPlay(false)
      } 
      return () => clearInterval(timer);
    }
  }, [count.timeValue, props.allowSpeak]);

  return (
    <div
      className={`lower_box ${
        props.box2active ? "lower_box_speakenable" : "lower_box_activebgc"
      }`}
    >
      {/* <div className={`${props.allowSpeak ? "red-circle" :"circle"}`}> */}
      <div className="mic-animation">
      <div className="circle">
      {/* countdwon packages */}
      <CountdownCircleTimer
    isPlaying={play}
    duration={props.timeValue}
    colors={['#004777', '#A30000', "#a43434"]}
    colorsTime={[props.timeValue, 10, 0]}
  >
  </CountdownCircleTimer>
      </div>

  <div className={`${props.allowSpeak ? "rip-ani" : "rip"}`}>
          <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 384 512"
              fill="white"
            >
              <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
            </svg>
          </div>
        </div>

      </div>

      {/* </div> */}
      <div className="ans_timer">
        <h5>Answering Time :</h5>
        <div className="box2_timer">
          <div className="alarm2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
          </div>
          <div className="alarm_text">
            <span> {count.timeValue} Seconds</span>Left
          </div>
        </div>
      </div>
    </div>
  );
}
