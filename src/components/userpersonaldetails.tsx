import React, {FormEvent, Component} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import TextField from '@mui/material/TextField'
import { Toolbar, Typography, IconButton } from '@mui/material'



const theme = createTheme({
    palette: {
        primary: {
            main:'#1976d2'
        }
    }
})

interface formUserDetails {
    nextStep: () => void;
    handleChange : (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
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

    render () {

        const {values, nextStep, handleChange} = this.props;

        return(
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar title = "multiple step form" sx = {{textAlign: "center"}}>
                        <Toolbar>
                            <IconButton edge = 'start' color="secondary" aria-label = "menu"></IconButton>
                        </Toolbar>
                        <Typography sx = {{fontFamily: "sans-serif", color: "WindowText"}}>multiple step form</Typography>
                    </AppBar>
                    <TextField helperText = "Input your username" onChange = {handleChange("firstName")} value={values.firstName}/>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails