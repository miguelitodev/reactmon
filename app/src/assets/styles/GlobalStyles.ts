import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        width: 100%;
    }
    *, button, input {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    :root {
        --title: #595858;
        --subtitle: #6D6D6D;
        --span: #000000;
        --background-input: #E7E7E7;
        --text-input: #6D6D6D;
        --menu-option: #6D6D6D;
        --name-pokemon: #595858;
        --title-pokemon: #595858;
        --type-name-pokemon: #717570;
        --property-pokemon: #595858;
        --value-property-pokemon: #000000;
        --title-abilities: #595858;
        --option-abilities: #000000;
        --background-pokemon-liked: #FDFF9E;

        // Color of pokemon's types
        --type-normal: #CC9955;
        --type-fighting: #B39792;
        --type-flying: #B0B0B0;
        --type-poison: #B78FC1;
        --type-ground: #DF783B;
        --type-rock: #B5BDA7;
        --type-bug: #DD7582;
        --type-ghost: #611A94;
        --type-steel: #5C8AA1;
        --type-fire: #F89030;
        --type-water: #8ABDDA;
        --type-grass: #DAE79C;
        --type-electric: #F1BC19;
        --type-psychic: #AF8FA3;
        --type-ice: #6FA8BB;
        --type-dragon: #9B2727;
        --type-fairy: #F4DAE5;
        --type-unknown: #6CD7E4;
        --type-shadow: #4A2461;
    }
`;
