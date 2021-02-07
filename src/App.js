// Import React Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Container } from "reactstrap";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//Import Toastify Package
import "react-toastify/dist/ReactToastify.min.css";

// Import Components
import Display from './Components/Display';

// Redux
import { Provider } from "react-redux";
import Store from './Store/Store';
import DisplayForm from './Components/DisplayForm';

function App() {
  return ( 
    <Router>
      <Provider store={Store}>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={DisplayForm} />
            <Route exact path="/dis" component={Display} />
          </Switch>
        </Container>      
      </Provider> 
    </Router>                
  );
}

export default App;