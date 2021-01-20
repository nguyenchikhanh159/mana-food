
import React, { Component } from 'react';
import Signup from './components-food/Signup';
import routes from './routes/routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      
    {this.showContentMenus(routes)}
    </div>
    </Router>
  );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
