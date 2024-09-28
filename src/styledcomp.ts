import { Container, TextField, AppBar, List, ListItemText } from '@mui/material';
import styled from 'styled-components';


export const StyledCont = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
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
margin: 2rem auto;
`

export const DynTextField = styled(TextField)`
position: relative;
margin: 5% 0;
width: 100%;
`

export const ListCont = styled(List)`
font-family: sans-sarif;
width: 60%;
margin-top: 2rem;
text-align: center;
`

export const ListItemCont = styled(ListItemText)`
text-align: center;
font-family: times new romans;
color: cornflowerblue;
text-transform: capitalize;
padding: 1.5rem;
`