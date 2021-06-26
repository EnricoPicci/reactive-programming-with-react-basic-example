import React from "react";
import logo from "./logo.svg";
import rxjsLogo from "./rxjs-1.svg";
import "./App.css";
import { MyComponent } from "./components/my-component";
import { AnotherComponent } from "./components/another-component";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Reactive Programming with React and RxJs</h2>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={rxjsLogo} className="App-logo" alt="rxjs" />
        </div>
        <div className="rowC">
          <MyComponent></MyComponent>
          <AnotherComponent></AnotherComponent>
        </div>
      </header>
    </div>
  );
}
