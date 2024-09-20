import {Component} from 'react'

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


    render () {
        return(
            <h2> holla world!</h2>
        )
    }
}