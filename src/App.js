import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from './components/Footer';






function App() {
  return (
   <div className="app">
     <Router>
            <NavBar />
       <Switch >
         <Route exact path="/">
            <Home/>
         </Route>
          <Route  path="/About">
            <About/>
         </Route>
         <Route  path="/Works">
            <Works/>
         </Route>
          <Route  path="/Contact">
            <Contact/>
         </Route>
       </Switch>
          <Footer/>
            </Router>
   </div>
  );
}

export default App;
