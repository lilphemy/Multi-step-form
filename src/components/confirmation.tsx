import React from 'react'
import { StyledCont, BtnCont, ListCont, AppBarCont } from '../styledcomp'
import { ListItem, Toolbar, Typography, ListItemText, Button } from '@mui/material'

interface compProps {
    contForm: () => void,
    backPage: () => void,
    values: {
        firstName: string,
        lastName: string,
        email: string,
        city: string,
        occupation: string,
        bio: string
    }
}

class ConfirmFormPage extends React.Component<compProps> {
    confirm = (e: any ) => {
        e.preventDefault()
        this.props.contForm()
    }
    render() {
        const { values: { firstName, lastName, email, city, occupation, bio }, contForm, backPage } = this.props
        return (
            <React.Fragment>
                <AppBarCont>
                    <Toolbar></Toolbar>
                    <Typography> confirmation page</Typography>
                </AppBarCont>
                <StyledCont>
                    <ListCont>
                        <ListItem component={ListItemText} primary='firstname' secondary={firstName} />
                        <ListItem component={ListItemText} primary='lastname' secondary={lastName} />
                        <ListItem component={ListItemText} primary='email' secondary={email} />
                        <ListItem component={ListItemText} primary='occupation' secondary={occupation} />
                        <ListItem component={ListItemText} primary='city' secondary={city} />
                        <ListItem component={ListItemText} primary='bio' secondary={bio} />
                    </ListCont>
                </StyledCont>
                <BtnCont>
                    <Button variant='outlined' children='back' onClick={backPage} />
                    <Button variant='outlined' children='Confirm and Continue' onClick={this.confirm} />
                </BtnCont>
            </React.Fragment>
        )
    }
}

export default ConfirmFormPage
