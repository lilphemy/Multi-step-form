import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import React from 'react'
import { StyledCont, BtnCont, DynTextField } from '../styledcomp';


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
                <AppBar sx={{ textAlign: "center", position: "relative", flex: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Toolbar>
                    </Toolbar>
                        <Typography>Form contact details</Typography>
                </AppBar>
                <StyledCont>
                    <DynTextField placeholder = "occupation" fullWidth = {true}  value = {occupation} onChange={handleChange("occupation")}/>
                    <DynTextField placeholder = "city" fullWidth = {true}  value = {city} onChange={handleChange("city")}/>
                    <DynTextField placeholder = "bio" fullWidth = {true}  value = {bio} onChange={handleChange("bio")}/>
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