import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { Typography, ListItem, ListItemIcon } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
   
   
      grow: {
        flexGrow: 1,
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
       
        
        marginLeft: 0,
      
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      inputInput: {
          
          backgroundColor:'#f2f2f2',
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        maxWidth:520,
       
      },
});

class Filterbar extends React.Component {


    

    state = {
        anchorEl: null,
    };

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Paper style={{ display: 'flex', maxWidth: '800px', margin: 'auto',padding:0}} >
                   

                       
                    <List style={{display:'flex',flexGrow:1}}>
                        <ListItem>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    style={{}}
                                    placeholder="Search…"
                                    classes={{
                                       
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </ListItem>
                    </List>
                           
                                   
                       
                       
                           <List style={{display:'flex',padding:0}}>
                               <ListItem button >
                                   <ListItemIcon>
                                   <Icon className={classNames(classes.icon, 'fas fa-filter')} color="secondary" />
                                   </ListItemIcon>
                               </ListItem>
                             
                               

                           
                        <ListItem button >
                                   <ListItemIcon>
                            <Icon className={classNames(classes.icon, 'fas fa-sort-amount-down')} color="secondary" />

                                   </ListItemIcon>
                               </ListItem>
                               
                        <ListItem button style={{backgroundColor:'#f50057'}} >
                                   <ListItemIcon backgroundColor="secondary">
                                <Icon className={classNames(classes.icon, 'fas fa-arrow-alt-circle-right')} style={{color:'white'}}  />

                                   </ListItemIcon>
                               </ListItem>
                               </List>
                        
                </Paper>


            </div>
           
        )
    }
}

Filterbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filterbar); 