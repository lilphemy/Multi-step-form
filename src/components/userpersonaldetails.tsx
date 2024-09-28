import React, { FormEvent, Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, IconButton, Button } from '@mui/material'
import {DynTextField, StyledCont, AppBarCont} from '../styledcomp'



interface formUserDetails {
    nextStep: () => void;
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

class FormUserDetails extends Component<formUserDetails> {

    continue = (e: any) => {
        e.preventDefault(),
            this.props.nextStep()
    };

    render() {

        const { values, handleChange } = this.props;

        return (
                <React.Fragment>
                    <AppBarCont>
                        <Toolbar sx={{ width: '5%' }}>
                            <IconButton edge='start' color="secondary" aria-label="menu"></IconButton>
                        </Toolbar>
                        <Typography sx={{ fontFamily: "sans-serif", color: "WindowText", width: '95%', textAlign: 'center' }}>Multiple step form</Typography>
                    </AppBarCont>
                    <StyledCont>
                        <DynTextField placeholder="firstname" fullWidth = {true} onChange={handleChange("firstName")} value={values.firstName} />
                        <br />
                        <DynTextField placeholder="lastname" fullWidth = {true} onChange={handleChange("lastname")} value={values.lastName} />
                        <br />
                        <DynTextField placeholder="email" fullWidth = {true} onChange={handleChange("email")} value={values.email} />
                        <br />
                        <Button variant='contained' children='CONTINUE' onClick={this.continue} />
                    </StyledCont>
                </React.Fragment>
        )
    }
}

export default FormUserDetails