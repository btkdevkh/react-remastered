import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav>
            <h1>My Articles</h1>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/articles/:id" component={Article} />
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
