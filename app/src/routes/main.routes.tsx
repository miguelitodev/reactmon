import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./../pages/Home";
import Pokemons from "./../pages/Pokemons";

const MainRoutes = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/pokemons" exact>
                    <Pokemons />
                </Route>
            </Switch>
        </>
    );
};

export default MainRoutes;
