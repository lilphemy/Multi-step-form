import React, { Component } from 'react'
import { AppBarCont, NewStyledCont, HeadTypoCont } from '../styledcomp'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import { Container, Typography } from '@mui/material'

class Success extends Component {

    render() {
        return (
            <React.Fragment>
                <AppBarCont>
                    <HeadTypoCont> SUCCESS</HeadTypoCont>
                </AppBarCont>
                <Container sx = {{height: '30rem', width: '40%', margin: '0 auto', marginTop: '4rem', backgroundColor: 'white', padding: '1rem', textAlign: 'center', }}>
                    <CheckCircleOutline sx= {{width: '10rem', height: '15rem', color: '#46C2CB', marginTop: '8rem'}} />
                    <Typography sx = {{fontSize: '2rem', fontFamily: 'serif', color: 'cornflowerblue', textTransform: 'capitalize'}}> registration successful! </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default Success
