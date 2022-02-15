import "./right.scss";
import React from "react";
import { gsap } from "gsap/all";
export default function Right() {
  const content = React.useRef(null);

  React.useEffect(() => {
    if (content == null) return;

    function start() {
      gsap.to(content.current, {
        opacity: 1,
        duration: 1.5,
        clipPath: "inset(0px 0% 0px 0%)",
        ease: "power3",
      });
    }

    window.addEventListener("load", () => {
      const id = setTimeout(() => {
        start();
      }, 1000);
    });
  }, []);

  return (
    <div className="introRightSection">
      <div className="contentWrapper">
        <div className="content" ref={content}>
          <div className="name">I'm developer sb</div>
          <div className="quote">
            An aspiring software developer, who is trying to be the BEST.
          </div>

          <div className="buttons">
            <a href="/contact">contact me</a>
            <a href="/hire">Hire me</a>
          </div>
        </div>
      </div>
    </div>
  );
}
