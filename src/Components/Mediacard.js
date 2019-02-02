import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import banner from '../Static/download.jpg';
import userImage from '../Static/viram.jpg';


const styles = {
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
        padding:100,
        postion:'relative'
    },
    user:{
        height:300,
        width:300,
        borderRadius:'50%',
        postion:'relative',
        marginTop:-150,
        marginLeft:50
    },
    cardProperty:{
        paddingLeft:35,
        marginTop:35
    },
    iconProperty:{
        
    }
};

class MediaCard extends React.Component {

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
               
               <CardMedia
                        className={classes.media}
                        image= { banner }
                        title="Contemplative Reptile"
                    />
                     <CardMedia
                        className={classes.user}
                        image= { userImage }
                        title="Contemplative Reptile"
                    />
                
            <Grid container>
                <Grid item xs={12} sm={6} className={classes.cardProperty}>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h4" >
                            Viram shah
                  </Typography>
                        <Typography component="p" variant="h6" >
                            Web Developer
                  </Typography>
                        <Typography variant="subtitle1">
                            Mumbai Area,India
                  </Typography>
                       
                    </CardContent>
                    
                </CardActionArea>
                <CardActions>
                <Button variant="contained" color="primary" className={classes.button}>
                            Add Profile Section
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            More..
                        </Button>
                </CardActions>
               
                </Grid>
                <Grid item xs={12} sm={6} className={classes.cardProperty}>
                <CardContent>
                        <Typography gutterBottom variant="h6"  >
                            <Icon className={classNames(classes.icon, 'fas fa-building')} color="primary"  style={{marginRight:25,marginBottom:-5}}/>
                            Digital Vault Serivces Limited
                        </Typography>
                        <Typography  variant="h6" >
                        <Icon className={classNames(classes.icon, 'fas fa-university')} color="secondary" style={{marginRight:25,marginBottom:-5}} />
                           D.J.Sanghvi college of engineering
                        </Typography>
                        <Typography variant="h6">
                        <Icon className={classNames(classes.icon, 'fas fa-address-book')} color="primary" style={{marginRight:25,marginBottom:-5}} />
                            See contact info
                  </Typography>
                  <Typography variant="h6">
                  <Icon className={classNames(classes.icon, 'fas fa-users')} color="secondary" style={{marginRight:25,marginBottom:-5}} />
                            see connections
                  </Typography>
                       
                    </CardContent>
                
                </Grid>
            </Grid>
            </Card>
        );
    }


}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
