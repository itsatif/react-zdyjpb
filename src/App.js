import React from "react";
import "./style.css";
import Wrapper from './context/Wrapper'
import Home from './components/Home'
export default function App() {
  return (
    <Wrapper>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
    <Home />
    </Wrapper>
  );
}
