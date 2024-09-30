import React, { Component } from 'react'
import { Typography, Button, Container } from '@mui/material'
import { DynTextField, StyledCont, AppBarCont, HeadTypoCont } from '../styledcomp'



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
                    <Container component='nav' sx = {{textAlign: "center", width: '100%'}}>
                        {/* <Toolbar sx={{ width: '5%' }}>
                            <IconButton edge='start' color="secondary" aria-label="menu"></IconButton>
                        </Toolbar> */}
                        <HeadTypoCont>Multiple step form</HeadTypoCont>
                    </Container>
                </AppBarCont>
                <StyledCont>
                    <DynTextField required={true} placeholder="firstname" fullWidth={true} onChange={handleChange("firstName")} value={values.firstName} />
                    <br />
                    <DynTextField required={true} placeholder="lastname" fullWidth={true} onChange={handleChange("lastName")} value={values.lastName} />
                    <br />
                    <DynTextField required={true} placeholder="email" fullWidth={true} onChange={handleChange("email")} value={values.email} />
                    <br />
                    <Button variant='outlined' children='CONTINUE' onClick={this.continue} />
                </StyledCont>
            </React.Fragment>
        )
    }
}

export default FormUserDetails