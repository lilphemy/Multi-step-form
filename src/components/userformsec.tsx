import React from 'react'
import {Component} from 'react'
import { Button } from '@mui/material'

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

    changeField = input => e => {
        this.setState({[input]: e.target.value})
    }

    render () {
        const {step} = this.state

        if(step === 1) {
            return(
                <React.Fragment>
                    <h2> holla world!</h2>
                    <Button variant = "contained"> You feel me!</Button>
                </React.Fragment>
            )
        }

        return(
            <h2>Hello universe!</h2>
        )
    }
}

export default UserForm