import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />
      {/*App body*/}
      <div className="app__body">
        <Sidebar />
      </div>
      {/*Sidebar*/}
      {/*feed*/}
      {/*widget*/}
    </div>
  );
}

export default App;
