import React from "react";
import { gsap } from "gsap/all";

export default function Header() {
  const header = React.useRef(null);

  React.useEffect(() => {
    if (header == null) return;
    const startAnimation = () => {
      const id = setTimeout(() => {
        gsap.to(header.current, {
          opacity: 1,
          duration: 1,
        });
      }, 1000);

      // const id2 = setTimeout(() => {
      //   header.current.style.opacity = 1;
      // }, 2000);
    };

    window.addEventListener("load", () => {
      startAnimation();
    });
  });
  return (
    <div className="header">
      <div className="left"></div>
      <div className="right">
        <ul>
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/contact">
            <li>contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
