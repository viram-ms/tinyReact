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

class Form2 extends React.Component {

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
            
                <h1 className={classes.textField}>Goals</h1>
                     <label className={classes.textField}>Short term professional goals(1 - 3 years) - where do you see yourself </label>
                <TextField
                id="outlined-full-width"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('short')}
                defaultValue={values.short}
                margin="normal"
                variant="outlined"
                />
                
                  <label className={classes.textField}>Mid term professional goals(3 - 5 years) - where do you see yourself </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('mid')}
                defaultValue={values.mid}
                margin="normal"
                variant="outlined"
                />
                  <label className={classes.textField}>Long term professional goals(5 years +) - where do you see yourself </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                onChange={handleChange('long')}
                defaultValue={values.long}
                margin="normal"
                variant="outlined"
                />
                   <label className={classes.textField}>What is the one thing that you wish you could change in your personal life forever to make your professional life better. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                defaultValue={values.personal}
                onChange={handleChange('personal')}

                margin="normal"
                variant="outlined"
                />
                <label className={classes.textField}>What is the one thing that you wish you could change in your personal life forever to make your professional life better. </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                defaultValue={values.professional}
                onChange={handleChange('professional')}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>What kind of leader do you think you are? </label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                defaultValue={values.leader}
                onChange={handleChange('leader')}
                margin="normal"
                variant="outlined"
                />
                
                  <label className={classes.textField}>If you had a option to wish & get to choose your profession, what would it be?</label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                defaultValue={values.option}
                onChange={handleChange('option')}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>If you had a magic wand, what is it that you would want to do to make this world a better place?</label>
                <TextField
                id="outlined-name"
                placeholder="Type here to add"
                className={classes.textField}
                defaultValue={values.wand}
                onChange={handleChange('wand')}
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

Form2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form2);
