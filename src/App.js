import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import HomeDescription from "./components/HomeDescription/HomeDescription";
import MapPage from "./components/Map/MapPage/MapPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mapPage">
            <MapPage />
          </Route>
          <Route path="/homeDescription">
            <HomeDescription />
          </Route>
          <Route exact path="/">
            <HomeDescription />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
