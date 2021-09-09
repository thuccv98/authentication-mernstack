import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/mainscreen" component={MainScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
