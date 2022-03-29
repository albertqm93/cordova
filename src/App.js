import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux';
import * as firebase from 'firebase/app';

import './App.css';

import { setUser } from './redux/actions/userActions';
import { registerUserObserver, getUserById } from './logic/User';

import {
  app
} from "./config";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Cocktail from './pages/Cocktail'
import Login from './pages/Login'
import Register from './pages/Register'
import Statistics from './pages/Statistics'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Chat from './pages/Chat'
import Cart from './pages/Cart'
import Forget from './pages/Forget'
import Layout from './layout/Layout'
import Success from './pages/Success'
import Cheesecake from './pages/Cheesecake'
import Cheesetraditional from './pages/cheeseTypes/Cheesetraditional'
import Cheesecolate from './pages/cheeseTypes/Cheesecolate'
import Cheeseapple from './pages/cheeseTypes/Cheeseapple'
import Cheeseblueberry from './pages/cheeseTypes/Cheeseblueberry'
import Cheesegreece from './pages/cheeseTypes/Cheesegreece'
import Cheesesweet from './pages/cheeseTypes/Cheesesweet'
import Cheesecurd from './pages/cheeseTypes/Cheesecurd'
import Cheesericotta from './pages/cheeseTypes/Cheesericotta'
import Cheesebrownie from './pages/cheeseTypes/Cheesebrownie'
import Cheesewhite from './pages/cheeseTypes/Cheesewhite'
import Cheesesalad from './pages/cheeseTypes/Cheesesalad'
import Cheeselime from './pages/cheeseTypes/Cheeselime'

import PrivateRoutes from './components/PrivateRoutes'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    registerUserObserver(async (user) => {
      if (user) {
        const profile = await getUserById(user.uid);
        dispatch(setUser(profile));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
      <Router>
        <Layout>
          <Switch>
            <Route  exact path="/" component={Cheesecake}/>
            <Route path="/About" component={About}/>
            <Route path="/Cheesecake" component={Cheesecake}/>
            <Route path="/Cocktail" component={Cocktail}/>
                <Route path="/Cheesetraditional" component={Cheesetraditional}/>
                <Route path="/Cheesecolate" component={Cheesecolate}/>
                <Route path="/Cheeseapple" component={Cheeseapple}/>
                <Route path="/Cheeseblueberry" component={Cheeseblueberry}/>
                <Route path="/Cheesegreece" component={Cheesegreece}/>
                <Route path="/Cheesesweet" component={Cheesesweet}/>
                <Route path="/Cheesecurd" component={Cheesecurd}/>
                <Route path="/Cheesericotta" component={Cheesericotta}/>
                <Route path="/Cheesebrownie" component={Cheesebrownie}/>
                <Route path="/Cheesewhite" component={Cheesewhite}/>
                <Route path="/Cheesesalad" component={Cheesesalad}/>
                <Route path="/Cheeselime" component={Cheeselime}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <PrivateRoutes path="/Statistics" component={Statistics}/>
            <Route path="/Contact" component={Contact}/>
            <PrivateRoutes path="/Profile" component={Profile}/>
            <PrivateRoutes path="/Chat" component={Chat}/>
            <PrivateRoutes path="/Cart" component={Cart}/>
            <PrivateRoutes path="/Success" component={Success}/>
            <Route path="/Forget" component={Forget}/>
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;
