import { Container, TextField, AppBar, List, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';


export const StyledCont = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 80%;
margin: 0 auto;
margin-top: 5%;
padding: 2rem;
`
export const NewStyledCont = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 80%;
margin: 0 auto;
margin-top: 5%;
padding: 0 auto;
border: 2px solid #00b4d8;
`
export const AppBarCont = styled(AppBar)`
position: relative;
z-index: 0;
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
export const HeadTypoCont = styled(Typography)`
font-family: serif;
margin: 0 auto;
text-align: center;
font-size: 24px;
padding: 2rem;
color: #F8F6E3;
font-weight: 700;
`