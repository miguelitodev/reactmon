import React from "react";
import axios from "axios";

import { Container } from "@material-ui/core";
import HeaderMenu from "./../../components/HeaderMenu";
import {
    Main,
    SpanTitle,
    InputSearch,
    List,
    Pokemon,
    ImagePokemon,
    NamePokemon,
} from "./styles";

interface IPokemonSearched {
    abilities: [
        {
            ability: {
                name: string;
                url: string;
            };
            is_hidden: boolean;
            slot: number;
        }
    ];
    base_experience: number;
    forms: [
        {
            name: string;
            url: string;
        }
    ];
    game_indices: [
        {
            game_index: number;
            version: {
                name: string;
                url: string;
            };
        }
    ];
    height: number;
    held_items: [
        {
            item: object;
            version_details: [
                {
                    rarity: Number;
                    version: {
                        name: string;
                        url: string;
                    };
                }
            ];
        }
    ];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [
        {
            move: object;
            version_group_details: [
                {
                    level_learned_at: number;
                    move_learn_method: {
                        name: string;
                        url: string;
                    };
                    version_group: {
                        name: string;
                        url: string;
                    };
                }
            ];
        }
    ];
    name: string;
    order: number;
    past_types: any;
    species: {
        name: string;
        url: string;
    };
    sprites: object;
    stats: [
        {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }
    ];
    types: [
        {
            slot: number;
            type: {
                name: string;
                url: string;
            };
        }
    ];
    weight: number;
}

const Pokemons = () => {
    const [searched, setSearched] = React.useState<string>("");
    const [pokemonSearched, setPokemonSearched] = React.useState<
        IPokemonSearched[]
    >([]);

    function search() {
        axios({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${searched}`,
        }).then((response) => {
            console.log(response.data);
            setPokemonSearched(response.data);
        });
    }

    return (
        <>
            <Container>
                <HeaderMenu />
                <Main>
                    <SpanTitle>Procure por um pokémon</SpanTitle>
                    <InputSearch
                        value={searched}
                        type="text"
                        onChange={(event) => {
                            setSearched(event?.target.value);
                        }}
                        onKeyUp={() => search()}
                        placeholder="Digite aqui"
                    />
                </Main>
                <List></List>
            </Container>
        </>
    );
};

export default Pokemons;
