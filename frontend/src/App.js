import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Customers from "./components/customers";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/not-found";
import Rentals from "./components/rental";

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/rental" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/customers" component={Customers} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
