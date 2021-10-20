import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/service/Services';
import Details from './components/details/Details';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import DoctorList from './components/DoctorList/DoctorList';
import NotFound from './components/notfound/NotFound';
import Online from './components/online/Online';
import Register from './components/Register/Register';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Header></Header>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/home'>
                            <Home></Home>
                        </Route>

                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/register'>
                            <Register></Register>
                        </Route>
                        <Route exact path='/doctor'>
                            <DoctorList></DoctorList>
                        </Route>
                        <Route exact path='/online'>
                            <Online></Online>
                        </Route>
                        <Route exact path="/service/:details">
                            <Details></Details>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
