/* eslint-disable no-unreachable */
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from './App'
import "./index.css";

// const Book = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.year}</p>
//       <p>{props.price}</p>
//       <p>{props.children}</p>
//     </div>
//   );
  // React.createElement("div", {}, [
  //   React.createElement("h2", {}, props.name),
  //   React.createElement("p", {}, props.year),
  //   React.createElement("p", {}, props.price),
  // ]);
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Создаём приложение на React</h1>
//       <Book name="JS" year="2019" price="$87">
//         Можно передать любой контент, который будет в компоненте определён как
//         "children"
//       </Book>
//       <Book name="JS for beginners" year="2016" price="$33" />
//       <Book name="React" year="2025" price="$117" />
//     </div>
//   );

  // React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Создаём приложение на React"),
  //   React.createElement(Book, { name: "JS", year: 2019, price: "$87" }),
  //   React.createElement(Book, {
  //     name: "JS for beginners",
  //     year: 2016,
  //     price: "$33",
  //   }),
  //   React.createElement(Book, { name: "React", year: 2025, price: "$117" }),
  // ]);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
