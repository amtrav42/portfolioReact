import React from "react";
import { render } from "react-dom";
import Template from "components/Template";
import Router from "./Router";
import 'styles/global.scss';

render(
  <Router/>,
  document.getElementById("app")
);
