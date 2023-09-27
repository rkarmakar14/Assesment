import React, { useEffect, useState } from "react";
import "./Box1.css";
export default function Box1() {
  const qstn_title = "Question 2";
  const qstn_body = "What is your Name?";

  const [count, setCount] = useState(20)

  const decresingTimer = () =>setCount((prev) => (prev-1))

  useEffect(() =>{
    const timer = setInterval(decresingTimer,1000)
    return timer;
},[setCount == 0])
  return (
    <div className="upper_box">
        <div className="qstn_tag">
          <span className="qstn_title">
            {qstn_title}
            <br />
          </span>
          {qstn_body}
        </div>
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
        <div className="alarm_text">Start Speaking in <span> {count} Seconds</span> </div>
      </div>
    </div>
  );
}
