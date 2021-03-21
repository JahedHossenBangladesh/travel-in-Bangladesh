import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import MapPage from "./components/Map/MapPage/MapPage";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/">
         <MapPage/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
