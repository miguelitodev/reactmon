import React from "react";

import { Container } from "@material-ui/core";
import {
    Content,
    Headline,
    Text,
    Title,
    Subtitle,
    RandomPokemon,
    MiddleLine,
    SpanTitle,
    InputSearch,
    LastLine,
    SpanText,
    BoldText,
} from "./styles";

const Home = () => {
    return (
        <>
            <Container>
                <Content>
                    <Headline>
                        <Text>
                            <Title>Reactmon</Title>
                            <Subtitle>
                                Uma pokédex desenvolvida com ReactJS
                            </Subtitle>
                        </Text>
                        <RandomPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" />
                    </Headline>
                    <MiddleLine>
                        <SpanTitle>Procure por um pokémon</SpanTitle>
                        <InputSearch placeholder="Digite aqui" />
                    </MiddleLine>
                    <LastLine>
                        <SpanText>Developed by</SpanText>
                        <BoldText> Miguel Riquelme</BoldText>
                    </LastLine>
                </Content>
            </Container>
        </>
    );
};

export default Home;
