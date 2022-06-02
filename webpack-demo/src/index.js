import _ from "lodash";
import "./style.css";

const HtmlWebpackPlugin = require("html-webpack-plugin");

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
