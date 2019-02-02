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

class Form4 extends React.Component {


    // state={
    //     firstName:'',
    //     lastName:'',
    //     userName:'',
    //     phone:'',
    //     email:'',
    //     address:'',
    //     worker:'',
    //     designation:'',
    // }

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }
    handleSubmit = (event) => {
        alert('A name was submitted: ');
        event.preventDefault();
    }
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

    render() {
        const { classes } = this.props;
        const { values, handleChange } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <FormControl className={classes.container} autoComplete="off">
                        <h1 className={classes.textField}>User Details</h1>

                        <Grid container>
                            <Grid item xs={6}>
                                <label className={classes.textField}> First Name</label>
                                <br />
                                <TextField required
                                    id="outlined-name"
                                    placeholder="Type here to add"
                                    className={classes.shortField}
                                    onChange={handleChange('firstName')}
                                    defaultValue={values.firstName}
                                    margin="dense"
                                    variant="outlined"
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <label className={classes.textField}> Last Name</label>
                                <br />

                                <TextField required
                                    id="outlined-name"
                                    placeholder="Type here to add"
                                    className={classes.shortField}
                                    defaultValue={values.lastName}
                                    onChange={handleChange('lastName')}
                                    margin="dense"
                                    variant="outlined"
                                />

                            </Grid>
                        </Grid>
                        <label className={classes.textField}> User Name</label>
                        <TextField required
                            id="outlined-name"
                            placeholder="Type here to add"
                            className={classes.textField}
                            defaultValue={values.userName}
                            onChange={handleChange('userName')}
                            margin="dense"
                            variant="outlined"
                        />
                        <h1 className={classes.textField}>Contact Details</h1>
                        <Grid container>
                            <Grid item xs={6}>
                                <label className={classes.textField}> Phone</label>
                                <br />
                                <TextField required
                                    id="outlined-name"
                                    placeholder="Type here to add"
                                    className={classes.shortField}
                                    defaultValue={values.phone}
                                    onChange={handleChange('phone')}
                                    margin="dense"
                                    variant="outlined"
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <label className={classes.textField}> Email Address</label>
                                <br />

                                <TextField required
                                    id="outlined-name"
                                    placeholder="Type here to add"
                                    className={classes.shortField}
                                    defaultValue={values.email}
                                    onChange={handleChange('email')}
                                    margin="dense"
                                    variant="outlined"
                                />

                            </Grid>
                        </Grid>
                        <label className={classes.textField}>Address</label>
                        <TextField required
                            id="outlined-name"
                            placeholder="Type here to add"
                            className={classes.textField}
                            defaultValue={values.address}
                            onChange={handleChange('address')}
                            margin="dense"
                            variant="outlined"
                        />
                        <label className={classes.textField}>What kind of worker do you think you are? </label>
                        <TextField required
                            id="outlined-name"
                            placeholder="Type here to add"
                            className={classes.textField}
                            defaultValue={values.worker}
                            onChange={handleChange('worker')}
                            margin="dense"
                            variant="outlined"
                        />
                        <label className={classes.textField}>Designation</label>
                        <TextField required
                            id="outlined-name"
                            placeholder="Type here to add"
                            className={classes.textField}
                            defaultValue={values.designation}
                            onChange={handleChange('designation')}
                            margin="dense"
                            variant="outlined"
                        />
                    </FormControl>
                    {/* <input type="submit" value="Submit" /> */}
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.textField}
                        style={{ width: '20%', padding: 15, display: 'block', marginTop: 30 }}
                        onClick={this.continue}
                    >Continue</Button>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

Form4.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form4);
