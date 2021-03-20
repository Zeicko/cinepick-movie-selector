import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route default path="/">
          <HomePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;