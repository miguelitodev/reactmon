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
    ButtonGo,
    LastLine,
    SpanText,
    BoldText,
} from "./styles";
import { CgArrowRightR as EnterIcon } from "react-icons/cg";

import { Link } from "react-router-dom";

const Home = () => {
    const [randomPokemon, setRandomPokemon] = React.useState<string>(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setInterval(() => {
        let value: number = Math.random() * (898 - 1) + 1;
        value = Number(value.toFixed(0));
        setRandomPokemon(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${value}.png`
        );
    }, 20000);

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
                        <RandomPokemon src={randomPokemon} />
                    </Headline>
                    <MiddleLine>
                        <Link to="/pokemons">
                            <ButtonGo>
                                ENTER <EnterIcon size={25} />
                            </ButtonGo>
                        </Link>
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
