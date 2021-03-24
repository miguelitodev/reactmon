import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
`;

export const SpanTitle = styled.span`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const InputSearch = styled.input`
    width: 550px;
    padding: 12px 30px;
    border-radius: 50px;
    color: var(--text-input);
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: var(--background-input);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
    box-shadow: 0px 0px 5px 0px rgba(109, 109, 109, 1);
`;

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
`;

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    margin: 35px auto;
    border-radius: 10px;
    background-color: var(--type-grass);
`;

export const ImagePokemon = styled.img`
    width: 146px;
`;

export const NamePokemon = styled.p`
    color: var(--name-pokemon);
    font-weight: bold;
`;
