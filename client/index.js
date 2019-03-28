import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import BaseReducer from "./store/BaseReducer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticateClass from "./container2/authenticateClass";

import FormClassCode from "./services/formClass";
import RecordClassCode from "./services/recordClass";
import GameClassCode from "./services/gameClass";


import "./scss/headerPage.scss";
import "./scss/records.scss";
import "./scss/tablePage.scss";
import "./scss/formPage.scss";
import "./scss/gamePage.scss";
import "./scss/flag.scss";


const store = createStore(BaseReducer);

store.subscribe(() => console.log(store.getState()));

class Main extends React.Component {
  state = { GameClass: null }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = async () => {
    const GameClass = await GameClassCode();
    this.setState({ GameClass });
  }

  render() {
    const { GameClass } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={AuthenticateClass} />
            <Route path="/game" component={GameClass} />
          </Switch>
        </Router>
      </Provider>);
  }
}


ReactDOM.render(<Main />,
  document.getElementById("app")
)


