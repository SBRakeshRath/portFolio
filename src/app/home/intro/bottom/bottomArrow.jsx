import "./bottomArrow.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useRef, useEffect } from "react";
export default function Bottom() {
  function Arrow(props) {
    let index = props.index;

    let transform = "rotate(90deg)translateX(" + 50 * index + "%)";
    return (
      <div
        className="oneArrowContainer"
        style={{
          transform: transform,
        }}
      >
        <ArrowForwardIosIcon />
      </div>
    );
  }
  const arrowContainer = useRef(null);
  const arrowColorChangingInterval = useRef(null);

  useEffect(() => {
    if (arrowContainer === null) return;

    function startAnimation() {
      let num = 0;
      arrowColorChangingInterval.current = setInterval(() => {
        let children = arrowContainer.current.children;
        if (num > children.length - 1) num = 0;

        for (let i = 0; i < children.length; i++) {
          children[i].style.color = "#8383ff";
        }
        children[children.length - 1 - num].style.color = "white";
        //end
        num++;
      }, 150);
    }
    startAnimation();
    return () => {
      clearInterval(arrowColorChangingInterval.current);
    };
  }, []);
  return (
    <div className="introBottomSection">
      <div className="arrowContainer" ref={arrowContainer}>
        {[...Array(4)].map((j, i) => {
          return <Arrow key={i} index={i} />;
        })}
      </div>
    </div>
  );
}
