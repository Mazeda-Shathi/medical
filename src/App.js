import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/service/Services';
import AboutUs from './components/About us/AboutUs';
import Details from './components/details/Details';
import Login from './components/Login/Login';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/about'>
                        <AboutUs></AboutUs>
                    </Route>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                    <Route path="/service/:details">
                        <Details></Details>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
