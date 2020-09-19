import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App
      x={[
        "8.1",
        "8.2",
        "8.3",
        "8.4",
        "8.5",
        "8.6",
        "8.7",
        "8.8",
        "8.9",
        "8.10",
        "8.11",
        "8.12",
      ]}
      datas={[
        {
          label: "amazon(주문수)",
          value: [20, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 130],
          color: "red",
        },
        {
          label: "ebay(주문수)",
          value: [30, 40, 70, 40, 10, 20, 40, 10, 30, 90, 70, 60],
          color: "blue",
        },
        {
          label: "taobao(주문수)",
          value: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          color: "green",
        },
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
