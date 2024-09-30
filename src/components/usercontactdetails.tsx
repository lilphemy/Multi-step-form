import {Toolbar, Typography, Button} from '@mui/material';
import React from 'react'
import { StyledCont, BtnCont, DynTextField, AppBarCont } from '../styledcomp';


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
        const {values, handleChange} = this.props
        const {occupation, city, bio} = values
        return (
            <React.Fragment>
                <AppBarCont>
                    <Toolbar>
                    </Toolbar>
                        <Typography sx={{backgoundColor: 'yellow'}}>Form contact details</Typography>
                </AppBarCont>
                <StyledCont>
                    <DynTextField required = {true} placeholder = "occupation" fullWidth = {true}  value = {occupation} onChange={handleChange("occupation")}/>
                    <DynTextField required = {true} placeholder = "city" fullWidth = {true}  value = {city} onChange={handleChange("city")}/>
                    <DynTextField required = {true} placeholder = "bio" fullWidth = {true}  value = {bio} onChange={handleChange("bio")}/>
                </StyledCont>
                <BtnCont>
                    <Button variant='outlined' onClick={this.back} children = "back" />
                    <Button variant='outlined' onClick={this.continue} children = "next"/>
                </BtnCont>
            </React.Fragment>
        )
    }
}

export default UserContactDetails