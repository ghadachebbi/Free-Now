import React from "react";
import { Switch, Route } from "react-router-dom";
import FreeNowVehiclesPage from "./pages/FreeNowVehiclesPage";
import ShareNowVehiclesPage from "./pages/ShareNowVehiclesPage";
import MapPage from "./pages/MapPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/freeNowVehicles" component={FreeNowVehiclesPage} />
        <Route path="/shareNowVehicles" component={ShareNowVehiclesPage} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </>
  );
}
