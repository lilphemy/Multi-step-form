import React from 'react'
import { StyledCont, BtnCont, ListCont, AppBarCont, ListItemCont } from '../styledcomp'
import { Toolbar, Typography, ListItem, ListItemText, Button } from '@mui/material'

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
        const { values: { firstName, lastName, email, city, occupation, bio }, backPage } = this.props
        return (
            <React.Fragment>
                <AppBarCont>
                    <Toolbar></Toolbar>
                    <Typography> confirmation page</Typography>
                </AppBarCont>
                <StyledCont>
                    <ListCont>
                        <ListItem component={ListItemText} >
                            <ListItemCont primary='firstname' secondary={firstName}/>
                            <ListItemCont primary='lastname' secondary={lastName}/>
                            <ListItemCont primary='email' secondary={email}/>
                            <ListItemCont primary='occupation' secondary={occupation}/>
                            <ListItemCont primary='city' secondary={city}/>
                            <ListItemCont primary='bio' secondary={bio}/>
                        </ListItem>
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
