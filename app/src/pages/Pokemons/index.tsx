import React from "react";

import { Container } from "@material-ui/core";
import HeaderMenu from "./../../components/HeaderMenu";
import { Main, SpanTitle, InputSearch } from "./styles";

const Pokemons = () => {
    return (
        <>
            <Container>
                <HeaderMenu />
                <Main>
                    <SpanTitle>Procure por um pokémon</SpanTitle>
                    <InputSearch placeholder="Digite aqui" />
                </Main>
            </Container>
        </>
    );
};

export default Pokemons;
