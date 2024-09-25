import React, {FormEvent, Component} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import TextField from '@mui/material/TextField'
import { Toolbar, Typography, IconButton } from '@mui/material'



const theme = createTheme({
    palette: {
        primary: {
            main:'#e976d2'
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
                    <AppBar sx = {{textAlign: "center", flex: "flex", flexDirection: 'row', justifyContent: "space-between"  }}>
                        <Toolbar sx = {{width: '5%'}}>
                            <IconButton edge = 'start' color="secondary" aria-label = "menu"></IconButton>
                        </Toolbar>
                        <Typography sx = {{fontFamily: "sans-serif", color: "WindowText", width: '95%', textAlign: 'center'}}>Multiple step form</Typography>
                    </AppBar>
                    <TextField variant = "standard" sx = {{position: 'relative', my: '10%', width: '20rem'}} helperText = "Input your firstname" onChange = {handleChange("firstName")} value={values.firstName}/>
                    <TextField variant = "standard" sx = {{position: 'relative', my: '10%', width: '20rem'}} helperText = "Input your lastname" onChange = {handleChange("lastname")} value={values.lastName}/>
                    <TextField variant = "standard" sx = {{position: 'relative', my: '10%', width: '20rem'}} helperText = "Input your email" onChange = {handleChange("email")} value={values.email}/>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails