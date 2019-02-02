import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    height:50,
  },
};

class MenuAppBar extends React.Component {
  state = {
  
    anchorEl: null,
  };

  componentDidMount() {
    loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#insertion-point-jss'),
    );
}
  

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
     
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" className={classes.grow}>
             TinyMajor
            </Typography>
            
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  style={{top:40}}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                <MenuItem style={{padding:30}}>
           
                  <Avatar className={classes.avatar}>
                    <FolderIcon />
                  </Avatar>
            
              <MenuItem style={{padding:20}}>
              <Typography variant="subtitle"> Viram Shah </Typography>
             </MenuItem>       
                </MenuItem>
                <li><Divider variant="middle" /></li>

                  <MenuItem style={{width:200}}>Profile</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>My account</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>Profile</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>My account</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>Profile</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>My account</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>Profile</MenuItem>
                  <li><Divider variant="middle" /></li>
                  <MenuItem>My account</MenuItem>
                  <li><Divider variant="middle" /></li>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);




            {/* <div style={{position:'relative'}}>
            <Icon className={classNames(classes.icon, 'fas fa-user')} onClick={this.handleChangeProfile} style={{right:10}}/>

        <Slide direction="down" in={this.state.checked} mountOnEnter unmountOnExit style={{position:'absolute'}}>
            <Paper style={{padding:20,width:200,justifyContent:'center',display:'block',right:40}}> */}