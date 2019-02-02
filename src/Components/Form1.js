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
}

class Form1 extends React.Component {

    // state={
    //     school:'',
    //     passing:'',
    //     userName:'',
    //     study:'',
    //     grade:'',
    //     activities:'',
    //     title:'',
    //     company:'',
    //     location:'',
    //     headline:'',
    //     description:''
    // }

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }
    // handleSubmit = (event) => {
    //     alert('A name was submitted: ' + this.state.userName);
    //     event.preventDefault();
    //   }
    // handleChange = name => event => {
    //     this.setState({
    //       [name]: event.target.value,
    //     });
    //     console.log(this.state);
    //   };
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
                <h1 className={classes.textField}>Education</h1>
                    <Grid container>
                    <Grid item sm>
                            <label className={classes.textField}>School </label>
                            <br />
                            <TextField
                               
                                id="outlined-name"
                                placeholder="Type here to add"
                                className={classes.shortField}
                                onChange={handleChange('school')}
                                defaultValue={values.school}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm>
                            <label className={classes.textField}>Passing Year of school </label>
                            <br />
                            <TextField
                                id="outlined-name"
                                placeholder="Type here to add"
                                className={classes.shortField}
                                defaultValue={values.passing}
                                onChange={handleChange('passing')}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        
                    </Grid> <Grid container>
                    <Grid item sm>
                            <label className={classes.textField}>Field of Study </label>
                            <br />
                            <TextField
                                id="outlined-name"
                                placeholder="Type here to add"
                                className={classes.shortField}
                                defaultValue={values.student}
                                onChange={handleChange('student')}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm>
                            <label className={classes.textField}>Grade</label>
                            <br />
                            <TextField
                                id="outlined-name"
                                placeholder="Type here to add"
                                className={classes.shortField}
                                defaultValue={values.grade}
                                onChange={handleChange('grade')}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        
                    </Grid>
                    <label className={classes.textField}>Activities and societies</label>
                <TextField
                id="outlined-name"
                className={classes.textField}
                defaultValue={values.activities}
                onChange={handleChange('activities')}
                margin="normal"
                variant="outlined"
                />

                <h1 className={classes.textField}>Work Experience</h1>
                <label className={classes.textField}>Title</label>
                <TextField
                id="outlined-name"
                placeholder="Ex. Manager"
                className={classes.textField}
                defaultValue={values.title}
                onChange={handleChange('title')}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>Company</label>
                <TextField
                id="outlined-name"
                placeholder="Ex. Microsoft"
                className={classes.textField}
                defaultValue={values.company}
                onChange={handleChange('company')}
                margin="normal"
                variant="outlined"
                />
                    <label className={classes.textField}>Location</label>
                <TextField
                id="outlined-name"
                placeholder="Ex. London, United Kingdom"
                className={classes.textField}
                defaultValue={values.location}
                onChange={handleChange('location')}
                margin="normal"
                variant="outlined"
                />
                <label className={classes.textField}>From*</label>
                 <Select style={{width:300,marginBottom:50}}
                 className={classes.textField}
            // value={this.state.age}
            // onChange={handleChange}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select style={{width:300}} className={classes.textField}
            // value={values.age}
            // onChange={handleChange}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <label className={classes.textField}>HeadLine</label>
                <TextField
                id="outlined-name"
                className={classes.textField}
                defaultValue={values.headline}
                onChange={handleChange('headline')}
                margin="normal"
                variant="outlined"
                />
                 <label className={classes.textField}>Description</label>
                <TextField
                id="outlined-name"
                className={classes.textField}
                defaultValue={values.description}
                onChange={handleChange('description')}
                margin="normal"
                variant="outlined"
                />
                <FormGroup column>
        <FormControlLabel
          control={
            <Checkbox
              defaultValue="checkedA"
            />
          }
          label="I currently work in this role"
          className={classes.textField}

        />
        
        <FormControlLabel
          control={
            <Checkbox
              defaultValue="checkedA"
            />
          }
          label="I currently work in this role"
          className={classes.textField}
        />
      
        <FormControlLabel
          control={
            <Checkbox
              defaultValue="checkedA"
            />
          }
          label="I currently work in this role"
          className={classes.textField}
        />
        </FormGroup>

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

Form1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form1);
