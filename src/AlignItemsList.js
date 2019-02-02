import React , { Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FormHelperText, Button, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import classNames from 'classnames';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    margin: 'auto',
  },
  inline: {
    display: 'inline',
  },
  paper: {
    width: '100%',
    maxWidth: 560,
    display: 'block',
    margin: 'auto',
    marginTop: 100

  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  button: {
    '&:hover': {
      backgroundColor: 'black'
    },
    width: 100
  }
});


class AlignItemsList extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }
  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.paper} square={false}>

        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="lorem ipsum is simply dummy text of the printing and typesetting industry."></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Icon className={classNames(classes.icon, 'fas fa-user')} color="secondary" fontSize="Large" style={{ margin: 0 }} />
            <ListItemText
              primary="Lorem ipsum"
              secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                    updated 11th december,2017
              </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book">

            </ListItemText>
            <Icon className={classNames(classes.icon, 'fas fa-image')} color="primary" style={{ fontSize: 75 }} />
          </ListItem>
          <ListItem>
            <IconButton color="secondary" disableRipple={true} disabled={true} style={{flex:1,justifyContent:'flex-start'}}>
               <Icon color="" className={classNames(classes.icon, 'fas fa-thumbs-up')} style={{color:'black'}} />
                <Icon color="secondary" className={classNames(classes.icon, 'fas fa-thumbs-down')} />


            </IconButton>

            <Button variant="extendedFab" color="primary" className={classes.button}  >Purchase</Button>
          </ListItem>



        </List>



      </Paper>

    );
  }
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
