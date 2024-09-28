import { Fragment } from "react"
import UserForm from "./components/userformsec"
import { ThemeProvider, createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(120, 40, 180, 0.5)'
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