import React, { useEffect, useState } from "react";
import "./Box1.css";

//create a function to apply the changes
export default function Box1(props) {
  const qstn_title = "Question 2";
  const qstn_body = "What is your Name?";

  const [count, setcount] = useState({ timeValue: props.timeValue });
  const [btnflg, setbtnflg] = useState(false);
  //fetching data and updating the DOM and timer which would depend upon two parameter 1.count, and 2.fetching the data from app.jsx
  useEffect(() => {
    // decreasing the time until it turns into 0
    const timer = setInterval(() => {
      // console.log("seconds ", count);
      let temp = count.timeValue-1;
      setcount((count) =>{return {...count, timeValue:temp}})
      // console.log("Updated seconds ", count);
    }, 1000);

    if (count.timeValue == 0) {
      // passing the data app.jsx and box will function with that
      setbtnflg(true);
      props.callbackbox1(true);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [count.timeValue]);

  return (
    <div
      className={`upper_box ${
        btnflg ? "upper_box_speakenable" : "upper_box_activebgc"
      }`}
    >
      <div className="qstn_tag">
        <span className="qstn_title">
          {qstn_title}
          <br />
        </span>
        {qstn_body}
      </div>
      {!btnflg && (
        <div className="box1_timer">
          <div className="alarm1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
          </div>
          <div className="alarm_text">
            Start Speaking in <span> {count.timeValue} Seconds</span>{" "}
          </div>
        </div>
      )}
      {btnflg && (
        <button
          className="speak_btn"
          onClick={(e) => {
            e.preventDefault();
            props.speakNow(true);
          }}
        >
          Speak Now
        </button>
      )}
    </div>
  );
}
