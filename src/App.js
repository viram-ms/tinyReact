import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './Components/MenuAppBar';
import Signin from './Signin';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';
import { Typography } from '@material-ui/core';
import AlignItemsList from './AlignItemsList';
import Filterbar from './Components/Filterbar';
import Partner from './Components/Partner';
import Mediacard from './Components/Mediacard';
import Form from './Components/Form'







class App extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <MenuAppBar /> */}
        {/* <Filterbar /> */}
        {/* <Signin /> */}
        {/* <AlignItemsList /> */}
        {/* <Partner /> */}
        {/* <Mediacard /> */}
        <Form />
        

       
      </div>
    );
  }
}



export default App;
