import { Button, Container, TextField, AppBar, List, ListItem } from '@mui/material';
import styled from 'styled-components';


export const StyledCont = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40%;
margin: 0 auto;
`
export const AppBarCont = styled(AppBar)`
position: relative;
flex: flex;
flex-direction: row;
justify-content: space-beween;
background-color: '#1052a2'
`

export const BtnCont = styled(Container)`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 60%;
align-items: center;
margi: 0 auto;
`

export const DynTextField = styled(TextField)`
position: relative;
margin: 5% 0;
width: 100%;
`

export const ListCont = styled(List)`
background-color: blue;
font-family: sans-sarif;
text-align: center;
`