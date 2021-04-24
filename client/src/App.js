import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import { HomePage, InfoPage } from './pages'

function App() {
  return (
    <Switch>
      <Route  path="/info" exact={true} component={InfoPage}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  );
}

export default App;
