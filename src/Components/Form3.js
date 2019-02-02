import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const styles = {
    container: {
        width: '100%',
        margin: 'auto',
    },
    textField: {
        width: '80%',
        marginLeft: 50,
    },
    shortField: {
        width: '60%',
        marginLeft: 50,
    }
};

class Form3 extends React.Component {

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


    render() {
        const { classes } = this.props;
        const { values, handleChange } = this.props;

        return (
            <div>
                 <form onSubmit={this.handleSubmit} >

            <FormControl className={classes.container} noValidate autoComplete="off">
          
                <h1 className={classes.textField}>Interets</h1>
                <label className={classes.textField}>What interets you besides your work/school/routine?</label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('interest')}
                defaultValue={values.interest}
                margin="normal"
                variant="outlined"
                /> 
                   <label className={classes.textField}>Reading likes/ writing or blogging skills. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('skill')}
                defaultValue={values.skill}
                margin="normal"
                variant="outlined"
                />
                  <label className={classes.textField}>Sports interets. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('sport')}
                defaultValue={values.sport}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>Career interets. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('career')}
                defaultValue={values.career}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>voluteering interets. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('volunter')}
                defaultValue={values.volunter}
                margin="normal"
                variant="outlined"
                />
                   <label className={classes.textField}>Recommendations </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('recommendation')}
                defaultValue={values.recommendation}
                margin="normal"
                variant="outlined"
                />
                

          </FormControl>
          <Button 
            color="primary"
            variant="contained"
            className={classes.textField}
            style={{width:'20%', padding:15,display:'block',marginTop:30}}
            onClick={this.back}
        
            >Back</Button>
          <Button 
            color="primary"
            variant="contained"
            className={classes.textField}
            style={{width:'20%', padding:15,display:'block',marginTop:30}}
            onClick={this.continue}
        
            >Continue</Button>
          </form>
      
                </div>
        );
    }
}

Form3.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form3);
