import React, {Fragment, StrictMode} from "react"
import ReactDom from 'react-dom/client'
import MainApp from "./App.tsx"


const root = ReactDom.createRoot(document.getElementById("root")!)

root.render(<StrictMode>
    <MainApp/>
</StrictMode>)