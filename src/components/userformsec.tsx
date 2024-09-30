import React, { ChangeEvent } from 'react'
import {Component} from 'react'
import { Button } from '@mui/material'
import FormUserDetails from './userpersonaldetails'
import UserContactDetails from './usercontactdetails'
import ConfirmFormPage from './confirmation'

// interface stateType {
//     step: number,
//     firstName: string,
//     lastName: string,
//     email: string,
//     occupation: string,
//     city: string,
//     bio: string
// }

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

    //continue button
    contPage = () => {

        const {step, firstName, lastName, email, occupation, city, bio} = this.state
        const id = Math.floor(Math.random() * 1000).toPrecision(1)

        //new person object is formed using variable as title name, an ES6 feature in JS

        const newPerson = {id: id, firstName, lastName, email, occupation, city, bio}
        
        //console.log(newPerson, localStorage.getItem("new user 5"), localStorage.getItem('new user 1.0'))
        localStorage.setItem(`new user ${id}`, `${newPerson}`);
        this.setState({step: step + 1, firstName: "", lastName: "", email: "", occupation: "", city: "", bio: ""})
    }

    // handle fields change

    changeField = (input: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({[input]: e.target.value})
    }

    render () {
        const {step, firstName, lastName, email, occupation, city, bio} = this.state
        const values = {step, firstName, lastName, email, occupation, city, bio}
        if(step === 1) {
            return(
                <FormUserDetails nextStep = {this.nextStep} handleChange = {this.changeField} values = {values} />
            )
        }

        if(step === 2 ) {
            return(
                <UserContactDetails prevStep = {this.prevStep} nextStep={this.nextStep} values={values} handleChange={this.changeField}/>
            )
        }

        if(step === 3 ) {
            return(
                <ConfirmFormPage values = {values} contForm = {this.contPage} backPage = {this.prevStep}/>
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