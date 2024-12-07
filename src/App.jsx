import "./App.css";
import Menu from "./components/Menu";
import Component from "./components/Component";
import { useState } from "react";

function App() {
  const condicion = false;

  return (
    <>
      <div>
        <h1>Renderizado condicional</h1>
        {condicion && <h2>La condición se cumple</h2>}

        {!condicion && <h2>La condición no se cumple</h2>}

        {/* {condicion ? (
          <h2>La condición se cumple</h2>
        ) : (
          <h2>La condición no se cumple</h2>
        )}  */}
      </div>
    </>
  );
}

export default App;
