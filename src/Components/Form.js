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
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';


const styles = {
    container: {
        
        marginLeft:100
      },
      textField: {
      },
      shortField:{
          width:'90%'
      }
};

class Form extends React.Component {

    state={
        step:1,
        firstName:'',
        lastName:'',
        userName:'',
        phone:'',
        email:'',
        address:'',
        worker:'',
        designation:'',
        school:'',
        passing:'',
        userName:'',
        study:'',
        grade:'',
        activities:'',
        title:'',
        company:'',
        location:'',
        headline:'',
        description:'',
        shortTerm:'',
        midTerm:'',
        longTerm:'',
        personal:'',
        perofessional:'',
        leader:'',
        option:'',
        wand:'',
        interet:'',
        skill:'',
        sport:'',
        career:'',
        volunter:'',
        recommendation:''

    }

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
      
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };


    render() {
        const { classes } = this.props;
        const { step } = this.state;
        const { firstName, lastName, email, address, phone,worker,designation, school,
        passing,
        userName,
        study,
        grade,
        activities,
        title,
        company,
        location,
        headline,
        description, shortTerm,
        midTerm,
        longTerm,
        personal,
        perofessional,
        leader,
        option,
        wand, 
        interet,
        skill,
        sport,
        career,
        volunter,
        recommendation} = this.state;
        const values = {
            firstName, lastName, email, address, phone, worker, designation, school,
            passing,
            userName,
            study,
            grade,
            activities,
            title,
            company,
            location,
            headline,
            description,shortTerm,
            midTerm,
            longTerm,
            personal,
            perofessional,
            leader,
            option,
            wand,
            interet,
        skill,
        sport,
        career,
        volunter,
        recommendation
        };

        switch(step){
                case 1:
                    return(
                        <Form4 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}/>   
                    );
                case 2:
                return(
                    <Form1 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                     values={values}
                    
                    />   
                );
                case 3:
                return(
                    <Form2 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />   
                );
                case 4:
                return(
                    <Form3 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />   
                );
                case 5:
                return(
                    <h1>sucess</h1>
                );
        }

        // return (
        //     <div>

          
              
        // {/* <Form1 /> */}
        //   {/* <Form2 />  */}
        //  {/* <Form3 />  */}
        //  <Form4 /> 

        //   {/* <p>User details (contact details?)</p>
        //   <p>Designation, Education, work experience, career interets, describe youself</p>
        //   <p>sports, voluteering, Recommendations, reading, skills,worker</p>
        //   <p>goal(3),leader,wand,life</p> */}
        //         </div>
        // );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
