import { Fragment } from "react"
import UserForm from "./components/userformsec"
import { ThemeProvider, createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: '#46C2CB'
        }, 
        secondary: {
            main: '#2345a6'
        }
    }
})

const MainApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <UserForm />
            </Fragment>
        </ThemeProvider>
    )
}

export default MainApp