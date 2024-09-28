import React from 'react'
import {StyledCont, BtnCont, ListCont, AppBarCont } from '../styledcomp'
import { AppBar, Toolbar, Typography } from '@mui/material'



class ConfirmFormPage extends React.Component {

    render () {

        return (
            <React.Fragment>
                <AppBarCont>
                    <Toolbar></Toolbar>
                    <Typography> confirmation page</Typography>
                </AppBarCont>
            </React.Fragment>
        )
    }
}
