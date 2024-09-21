import React, {Fragment, StrictMode} from "react"
import ReactDom from 'react-dom/client'
import MainApp from "./App.tsx"
import MainUser from "./components/userpersonaldetails.tsx"


const root = ReactDom.createRoot(document.getElementById("root")!)

root.render(<StrictMode>
    <MainUser/>
</StrictMode>)