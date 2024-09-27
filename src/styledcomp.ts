import { Button, Container, TextField } from '@mui/material';
import styled from 'styled-components';


export const StyledCont = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
margin: 0 auto;
`

export const BtnCont = styled(Container)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 60%;
margi: 0 auto;
`

export const DynTextField = styled(TextField)`
position: relative;
margin: 5% 0;
width: 100%;
`