import { AppBar, Toolbar, Typography, TextField, Container, Button } from '@mui/material';
import React from 'react'
import { StyledCont, BtnCont } from '../styledcomp';


interface formUserDetails {
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: {
        step: number,
        firstName: string;
        lastName: string;
        email: string;
        occupation: string;
        city: string;
        bio: string;
    }

}

class UserContactDetails extends React.Component<formUserDetails> {
    continue = (e: any) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e: any) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {values, nextStep, prevStep, handleChange} = this.props
        const {occupation, city, bio} = values
        return (
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                    </Toolbar>
                        <Typography>Form contact details</Typography>
                </AppBar>
                <StyledCont>
                    <TextField placeholder = "occupation" value = {occupation} />
                </StyledCont>
                <BtnCont>
                    <Button onClick={prevStep}>back</Button>
                    <Button onClick={nextStep}>next</Button>
                </BtnCont>
            </React.Fragment>
        )
    }
}

export default UserContactDetails