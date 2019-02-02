import React from 'react';
import logobar from './logobar.svg';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';




const styles = theme => ({
    root: {
        flex:1,
        height:100,
        backgroundColor:'#494949',
        width:'100%',
       
    },
})
   

class Partner extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
               <img src={logobar} alt="logo" style={{display:'block',margin:'auto',paddingTop:'30px',maxWidth:'100%'}}/>
                </div>
        )
    }
}
Partner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partner); 