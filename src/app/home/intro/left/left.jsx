import "./left.scss";
import React from "react";
import { gsap } from "gsap/all";

export default function Left() {
  const animationTab = React.useRef(null);
  const container = React.useRef(null);
  const circle = React.useRef(null);
  const animateBubbleFrameTimeout = React.useRef([]);
  const animateBubbleFrameInterval = React.useRef(null);

  React.useEffect(() => {
    if (container === null) return;

    function start() {
      circle.current.style.animation = "scale 1s ease 1";
      circle.current.style.transform = "scale(1)";
      animateBubbleFrameTimeout.current.push(
        setTimeout(() => {
          gsap.to(container.current, {
            rotationZ: "-10deg",
            duration: 1,
          });
        }, 1500)
      );

      animateBubbleFrameTimeout.current.push(
        setTimeout(() => {
          gsap.to(container.current, {
            left: "50%",
            transform: "translate(-100%, -50%)",
            duration: 1,
            // backgroundColor:"transparent"
          });
          gsap.to(circle.current, {
            duration: 1.5,
            backgroundColor: "#2f2fa200",
          });
        }, 1000)
      );
    }

    window.addEventListener("load", () => {
      start();
    });
  }, []);

  return (
    <div className="introLeftSection" ref={container}>
      <div className="animation" ref={animationTab}></div>
      <div className="circleWrapper" ref={circle}>
        <div className="circle">Hi</div>
      </div>
    </div>
  );
}
