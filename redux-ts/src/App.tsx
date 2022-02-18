import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state";
import RepositoreisList from "./RepositoreisList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoreisList />
      </div>
    </Provider>
  );
}

export default App;
