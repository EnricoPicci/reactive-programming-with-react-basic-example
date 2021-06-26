import React from "react";
import { MyService } from "../services//my-service";

const service = new MyService();

console.log("MyService created");

export const MyServiceContext = React.createContext(service);
