import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SearchNotFound from "./components/SearchNotFound";
import SearchPage from "./components/SearchPage";
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/search-404" component={SearchNotFound} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
