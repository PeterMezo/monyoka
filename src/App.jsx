import { useState } from 'react';
import './App.css';
import headers from "./assets/headers.js";
import CatAnimation from "./assets/CatAnimation.jsx";

const Header = ({ headerT }) => {
  return (
    <div id="header">
      <h1>{headerT}</h1>
    </div>
  );
};

const OptionButton = ({ onClick, text, type, widthN, heightN, btnVis }) => {
  const vis = btnVis === 1 ? "inline" : "none"; 
  return (
    <button
      onClick={onClick}
      datatype={type}
      style={{ width: widthN, height: heightN, display: vis }}
      className="menoBtn"
    >
      {text}
    </button>
  );
};

const Options = ({ onClick, btnSizeG, btnSizeB, btnVis }) => {
  return (
    <div style={{ width: "auto", margin: "auto", display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px" }}>
      <OptionButton onClick={onClick} text={"YES"} type={"yes"} btnVis={btnVis} widthN={`${btnSizeG.width}px`} heightN={`${btnSizeG.height}px`} />
      <OptionButton onClick={onClick} text={"No.."} type={"no"} btnVis={btnVis} widthN={`${btnSizeB.width}px`} heightN={`${btnSizeB.height}px`} />
    </div>
  );
};

function App() {
  const impHeaders = headers;
  const [headerInd, setHeaderInd] = useState(0);
  const [headerT, setHeaderT] = useState(impHeaders.headers[headerInd]);
  const [btnSizeG, incBtnSizeG] = useState({ width: 100, height: 50 });
  const [btnSizeB, incBtnSizeB] = useState({ width: 100, height: 50 });
  const [btnVis, setButtonVis] = useState(1);
  const [isKissing, setIsKissing] = useState(false);

  const updateHeader = (e) => {
    const type = e.target.getAttribute("datatype");

    if (type === "yes") {
      setIsKissing(true);  // Start the heart animation
      setHeaderT("WAAAAAAAAAAAAAAAAAAAAAAAAAA PUNYOOOOOOOOOOOOOOOOOOOOOOO LETSGGGOOOOOoo SZEREEEEET");
      setButtonVis(0);  // Hide the buttons
    }

    if (type === "no") {
      updateBtnSizeB();
      updateBtnSizeG();
      const next = Math.floor(Math.random()*((impHeaders.headers.length) - 1))
      console.log(next);
      setHeaderInd(next);
      setHeaderT(nextHeader(next));
    }
  };

  const updateBtnSizeG = () => {
    const nW = btnSizeG.width * 2;
    const nH = btnSizeG.height * 1.5;
    const pack = { width: `${nW}`, height: `${nH}` };
    incBtnSizeG(pack);
  };

  const updateBtnSizeB = () => {
    const nW = btnSizeB.width * 0.8;
    const nH = btnSizeB.height * 0.9;
    const pack = { width: `${nW}`, height: `${nH}` };
    incBtnSizeB(pack);
  };

  const nextHeader = (next) => {
    return impHeaders.headers[next];
  };

  return (
    <div id="bord">
      <Header headerT={headerT} />
      <Options onClick={updateHeader} btnSizeG={btnSizeG} btnSizeB={btnSizeB} btnVis={btnVis} />
      <CatAnimation isKissing={isKissing} />
    </div>
  );
}

export default App;
