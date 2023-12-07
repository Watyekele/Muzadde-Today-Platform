import React from "react";
import "./App.css";
import Talk from "./pages/Talk.jsx";
import Login from "./pages/login.jsx";
import Nav from "./Components/Nav.jsx";
function App() {
  return (
    <div className="App">
      <Talk />
      <Login />
    </div>
  );
}

export default App;
