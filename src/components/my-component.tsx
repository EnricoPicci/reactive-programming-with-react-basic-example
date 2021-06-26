import React, { FC, useContext } from "react";
import { MyServiceContext } from "../context/my-context";

export const MyComponent: FC = () => {
  const myService = useContext(MyServiceContext);

  const reset = () => {
    myService.reset();
  };

  const callRemoteAPI = () => {
    myService.callRemoteAPI("abc");
  };

  return (
    <div className="MyComponent">
      <h3>MyComponent</h3>
      <div>
        <button className="MyComponent-btn" onClick={reset}>
          Reset
        </button>
        <button className="MyComponent-btn" onClick={callRemoteAPI}>
          Call remote API
        </button>
      </div>
    </div>
  );
};
