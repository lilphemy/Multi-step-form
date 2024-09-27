import React, { FormEvent, Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import TextField from '@mui/material/TextField'
import { Toolbar, Typography, IconButton, Button } from '@mui/material'
import {StyledCont} from '../styledcomp'


const theme = createTheme({
    palette: {
        primary: {
            main: '#e976d2'
        }
    }
})

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
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar sx={{ textAlign: "center", position: "relative", flex: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                        <Toolbar sx={{ width: '5%' }}>
                            <IconButton edge='start' color="secondary" aria-label="menu"></IconButton>
                        </Toolbar>
                        <Typography sx={{ fontFamily: "sans-serif", color: "WindowText", width: '95%', textAlign: 'center' }}>Multiple step form</Typography>
                    </AppBar>
                    <StyledCont>
                        <TextField variant="filled" sx={{ position: 'relative', my: '5%', width: '20rem' }} placeholder="firstname" fullWidth = {true} onChange={handleChange("firstName")} value={values.firstName} />
                        <br />
                        <TextField variant="filled" sx={{ position: 'relative', my: '5%', width: '20rem' }} placeholder="lastname" fullWidth = {true} onChange={handleChange("lastname")} value={values.lastName} />
                        <br />
                        <TextField variant="filled" sx={{ position: 'relative', my: '5%', width: '20rem' }} placeholder="email" fullWidth = {true} onChange={handleChange("email")} value={values.email} />
                        <br />
                        <Button variant='contained' children='CONTINUE' onClick={this.continue} />
                    </StyledCont>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails