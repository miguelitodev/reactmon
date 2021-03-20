import React from "react";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main.routes";

import GlobalStyles from "./assets/styles/GlobalStyles";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
