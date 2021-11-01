import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movie from "./pages/Movie";
import DetailsMovie from "./pages/DetailsMovie";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">hello world</header> */}

      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Movie} />
            <Route path="/details/:id" component={DetailsMovie} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
