import "./intro.scss";
import Header from "./header";
import Background from "../background/background"
import Left from "./left/left";
import Right from "./right/right";
import Bottom  from "./bottom/bottomArrow";
export default function SectionOne() {
  return (
    <div id="intro" className="section">
      <Background />
      <Header />
      <Left />
      <Right />
      <Bottom />
    </div>
  );
}
