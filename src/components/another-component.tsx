import React, { FC, useContext, useEffect, useState } from "react";
import { merge } from "rxjs";
import { tap } from "rxjs/operators";
import { MyServiceContext } from "../context/my-context";

export const AnotherComponent: FC = () => {
  const myService = useContext(MyServiceContext);

  const [data, setData] = useState("No data received yet from remote service");

  useEffect(() => {
    const data$ = myService.remoteData$.pipe(
      tap({
        next: (data) => {
          setData(data);
        },
      })
    );
    const reset$ = myService.reset$.pipe(
      tap({
        next: () => {
          setData("");
        },
      })
    );

    const subscription = merge(data$, reset$).subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [myService]);

  return (
    <div className="AnotherComponent">
      <h3>AnotherComponent</h3>
      <p>{data}</p>
    </div>
  );
};
