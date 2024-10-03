import React, { Component } from 'react'
import { AppBarCont, NewStyledCont, HeadTypoCont } from '../styledcomp'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import { Container } from '@mui/material'

class Success extends Component {

    render() {
        return (
            <React.Fragment>
                <AppBarCont>
                    <HeadTypoCont> success</HeadTypoCont>
                </AppBarCont>
                <Container sx = {{height: 'fit-content', width: 'fit-content', margin: '0 auto', marginTop: '4rem', backgroundColor: '#c3214d', padding: '1rem'}}>
                    <CheckCircleOutline sx= {{width: '100%', height: '3rem'}} />
                </Container>
            </React.Fragment>
        )
    }
}

export default Success
