import React, { ChangeEvent } from 'react'
import {Component} from 'react'
import { Button } from '@mui/material'
import FormUserDetails from './userpersonaldetails'
import UserContactDetails from './usercontactdetails'

class UserForm extends Component {

    //state-hook definition for class base components

    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: "" 
    }

    //action for proceeding to next step

    nextStep = () => {
        const {step} = this.state
        this.setState({step: step + 1})
    }

    //action for previous-step

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    // handle fields change

    changeField = (input: string) => (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[input]: e.target.value})
    }

    render () {
        const {step, firstName, lastName, email, occupation, city, bio} = this.state
        const values = {step, firstName, lastName, email, occupation, city, bio}
        if(step === 1) {
            return(
                // <React.Fragment>
                //     <h2> holla world!</h2>
                //     <Button variant = "contained"> You feel me!</Button>
                // </React.Fragment>
                <FormUserDetails nextStep = {this.nextStep} handleChange = {this.changeField} values = {values} />
            )
        }

        if(step === 2 ) {
            return(
                // <React.Fragment>
                //     <Button variant = "contained">personal contacts</Button>
                // </React.Fragment>
                <UserContactDetails prevStep = {this.prevStep} nextStep={this.nextStep} values={values} handleChange={this.changeField}/>
            )
        }

        if(step === 3 ) {
            return(
                <React.Fragment>
                    <Button variant = "contained">confirmation</Button>
                </React.Fragment>
                
            )
        }
        if(step === 4 ) {
            return(
                <React.Fragment>
                    <Button variant = "contained">success</Button>
                </React.Fragment>
                
            )
        }
        
        return(
            <h2>Hello universe!</h2>
        )
    }
}

export default UserForm